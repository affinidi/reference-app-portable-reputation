/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ErrorObject {
  serviceName: string;
  code: string;
  fields?: Record<string, any>;
  /** @format double */
  httpStatusCode: number;
  message: string;
  context?: any;
  originalError?: any;
  inputParams: any;
  endpointUrl: string;
}

export interface DidAuthResponseTokenOutput {
  didAuthResponseToken: string;
}

export interface DidAuthResponseTokenInput {
  didAuthRequestToken: string;
}

export type AnyData = any;

export interface W3CCredentialStatus {
  id: string;
  type: string;
  revocationListIndex: string;
  revocationListCredential: string;
}

export interface UnsignedW3CCredential {
  "@context": AnyData;
  id: string;
  type: string[];
  holder?: AnyData | null;
  credentialSubject: AnyData;
  issuanceDate?: string | null;
  credentialStatus?: W3CCredentialStatus | null;
  expirationDate?: string | null;
  credentialSchema?: {
    type: string;
    id: string;
  };
  proof?: {
    type: string;
  };
}

export type StoredW3CCredential = UnsignedW3CCredential;

export interface StoredOpenAttestationDocumentSignature {
  type?: string;
  targetHash?: string;
  proof?: AnyData;
  merkleRoot?: string;
}

export interface StoredOpenAttestationDocument {
  version: string;
  data: AnyData;
  signature?: StoredOpenAttestationDocumentSignature;
}

export type StoredCredential =
  | StoredW3CCredential
  | StoredOpenAttestationDocument
  | (StoredW3CCredential & StoredOpenAttestationDocument);

export type GetCredentialsOutput = StoredCredential[];

export interface ClaimCredentialOutput {
  credentialIds: string[];
}

export type GetCredentialOutput = StoredCredential;

export interface ShareCredentialOutput {
  qrCode: string;
  sharingUrl: string;
}

/** @pattern ^[0-9]+(m|h|d){0,1}$ */
export type ValidateTTL = string;

export interface ShareCredentialInput {
  ttl?: ValidateTTL | null;
  fieldsToShare?: string[];
}

export interface SharePresentationOutput {
  qrCode: string;
  sharingUrl: string;
}

export type AnyObject = Record<string, any>;

export type W3CProof = AnyObject & {
  type: string;
};

export interface W3CCredential {
  "@context": AnyData;
  id: string;
  type: string[];
  holder: AnyData;
  credentialSubject: AnyData;
  credentialSchema?: AnyData;
  issuanceDate: string;
  issuer: AnyData;
  credentialStatus?: W3CCredentialStatus | null;
  expirationDate?: string | null;
  proof: W3CProof;
}

export interface W3CPresentation {
  "@context": AnyData;
  id?: string | null;
  type: string[];
  holder: AnyData;
  verifiableCredential: W3CCredential[];
  proof: AnyData;
}

export interface SharePresentationInput {
  ttl?: ValidateTTL | null;
  oneTimeUse?: false;
  signedPresentation: W3CPresentation;
}

export interface SaveCredentialOutput {
  credentialIds: string[];
}

export interface SaveCredentialInput {
  data: (StoredCredential & AnyObject)[];
}

export interface SignCredentialOutput {
  signedCredential: W3CCredential;
}

export enum KeyTypes {
  Rsa = "rsa",
  Bbs = "bbs",
  Ecdsa = "ecdsa",
}

export interface SignCredentialInput {
  unsignedCredential: UnsignedW3CCredential;
  keyType?: KeyTypes;
}

export interface SignPresentationOutput {
  signedPresentation: W3CPresentation;
}

export interface UnsignedW3CPresentation {
  "@context": AnyData;
  id?: string | null;
  type: string[];
  holder: AnyData;
  verifiableCredential: W3CCredential[];
}

export interface SignPresentationInput {
  unsignedPresentation: UnsignedW3CPresentation;
  challenge: string;
  domain: string;
}

export interface ApiCredentialRequirement {
  constraints?: string[];
  type: string[];
}

export interface GenerateCredentialShareRequestTokenRequest {
  requirements: ApiCredentialRequirement[];
  issuerDid?: string;
  audienceDid?: string;
  expiresAt?: string;
  nonce?: string;
  callbackUrl?: string;
}

export interface CreateCredentialShareResponseTokenRequest {
  credentialShareRequestToken: string;
  credentials: W3CCredential[];
  expiresAt?: string;
}

export interface ReadEncryptedMessageOuput {
  message: AnyData;
}

export interface ReadEncryptedMessageInput {
  encryptedMessage: string;
}

export interface CreateEncryptedMessageOuput {
  encryptedMessage: string;
}

export interface CreateEncryptedMessageInput {
  did: string;
  message: AnyData;
}

export interface UserInfoOutput {
  userCreateDate?: string;
}

export interface LoginOutput {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  did: string;
}

/**
 * @minLength 1
 * @maxLength 128
 */
export type ValidatedUsername = string;

/** @minLength 1 */
export type ExistingPassword = string;

export interface LoginInput {
  username: ValidatedUsername;
  password: ExistingPassword;
}

export interface ArbitraryUsernameSignUpOutput {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  did: string;
}

export type EmailSignUpOutput = string;

export type TelSignUpOutput = string;

/**
 * @minLength 8
 * @maxLength 256
 * @pattern ^[\S]+.*[\S]+$
 */
export type ValidatedPassword = string;

export enum ApiDidMethod {
  Jolo = "jolo",
  Elem = "elem",
  Polygon = "polygon",
  PolygonTestnet = "polygon:testnet",
}

export interface SdkOptionsInput {
  didMethod?: ApiDidMethod | null;
  /** @minItems 1 */
  keyTypes?: KeyTypes[];
}

export interface ApiMessageParameters {
  htmlMessage?: string;
  subject?: string;
  message: string;
}

export interface SignUpInput {
  username: ValidatedUsername;
  password: ValidatedPassword;
  options?: SdkOptionsInput | null;
  messageParameters?: ApiMessageParameters | null;
}

export interface ConfirmSignUpOutput {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  did: string;
}

export interface ConfirmSignUpInput {
  /** @minLength 1 */
  token: string;
  /** @minLength 1 */
  confirmationCode: string;
  options?: SdkOptionsInput | null;
}

export interface ForgotPasswordInput {
  username: ValidatedUsername;
}

export interface ForgotPasswordConfirmInput {
  username: ValidatedUsername;
  /** @minLength 1 */
  otp: string;
  newPassword: ValidatedPassword;
}

export interface ChangeUsernameInput {
  username: ValidatedUsername;
}

export interface ChangeUsernameConfirmInput {
  username: ValidatedUsername;
  /** @minLength 1 */
  confirmationCode: string;
}

export interface ChangePasswordInput {
  oldPassword: ExistingPassword;
  newPassword: ValidatedPassword;
}

export interface SignInInput {
  username: ValidatedUsername;
  messageParameters?: ApiMessageParameters | null;
}

export interface SignInWithTruecallerOutput {
  accessToken: string;
  idToken?: string;
  refreshToken: string;
  did: string;
}

export interface ProfileTrueCaller {
  payload: string;
  signature: string;
  signatureAlgorithm: string;
  avatarUrl?: string | null;
  city?: string | null;
  companyName?: string | null;
  countryCode?: string | null;
  email?: string | null;
  facebookId?: string | null;
  firstName?: string;
  gender?: string;
  isAmbassador?: boolean;
  isBusiness?: boolean;
  isVerified?: boolean;
  jobTitle?: string | null;
  lastName?: string;
  phoneNumber?: string;
  requestNonce?: string;
  street?: string | null;
  successful?: boolean;
  twitterId?: string | null;
  url?: string | null;
  zipcode?: string | null;
  [key: string]: any;
}

export interface SignInWithTuecallerInput {
  token: ProfileTrueCaller;
  options?: SdkOptionsInput | null;
}

export interface ConfirmSignInOutput {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  did: string;
}

export interface ConfirmSignInInput {
  /** @minLength 1 */
  token: string;
  /** @minLength 1 */
  confirmationCode: string;
  issueSignupCredential?: boolean | null;
  options?: SdkOptionsInput | null;
}

export interface PasswordlessLoginInput {
  username: ValidatedUsername;
  messageParameters?: ApiMessageParameters | null;
}

export interface ConfirmPasswordlessLoginOutput {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  did: string;
}

export interface ConfirmPasswordlessLoginInput {
  /** @minLength 1 */
  token: string;
  /** @minLength 1 */
  confirmationCode: string;
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickLoginOutputExcludeKeysRefreshToken {
  accessToken: string;
  idToken: string;
  did: string;
}

/** Construct a type with the properties of T except for those in type K. */
export type OmitLoginOutputRefreshToken = PickLoginOutputExcludeKeysRefreshToken;

export interface LoginWithRefreshTokenInput {
  refreshToken: string;
}

export interface SignedJwtObject {
  header: AnyData;
  payload: AnyData;
  signature?: string;
}

export interface SignJwtOutput {
  jwtObject: SignedJwtObject;
  jwt?: string;
}

export interface UnsignedJwtObject {
  header: AnyData;
  payload: AnyData;
}

export interface SignJwtInput {
  jwtObject: UnsignedJwtObject;
  returnEncodedJwt?: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/api/v1";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title cloud-wallet-api
 * @version 1.73.0
 * @license ISC
 * @baseUrl /api/v1
 * @contact The Engineering Team <nucleus.team@affinidi.com>
 *
 * Affinidi SSIaaS
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  didAuth = {
    /**
     * @description Create Response on initiated DID auth request.
     *
     * @tags DidAuthentication
     * @name CreateDidAuthResponse
     * @request POST:/did-auth/create-did-auth-response
     * @secure
     */
    createDidAuthResponse: (data: DidAuthResponseTokenInput, params: RequestParams = {}) =>
      this.request<DidAuthResponseTokenOutput, ErrorObject>({
        path: `/did-auth/create-did-auth-response`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  wallet = {
    /**
     * @description Get the list of all user's credentials. Following API endpoint is used in case if the user wants to see all the credentials that are stored in the cloud wallet.
     *
     * @tags Wallet
     * @name GetCredentials
     * @request GET:/wallet/credentials
     * @secure
     */
    getCredentials: (
      query?: {
        credentialShareRequestToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetCredentialsOutput, ErrorObject>({
        path: `/wallet/credentials`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Save credentials in cloud wallet. Expected `data` to be an array of VCs to save. VC type can be W3C credential or Open Attestation Document ``` OpenAttestationDocument { version: string data: FreeFormObject <- must contain a field `id` signature: { type: string targetHash: string proof: FreeFormObject[] merkleRoot: string } } ``` ``` W3cCredential { '@context': FreeFormObject id: string type: string[] holder: FreeFormObject credentialSubject: FreeFormObject issuanceDate: string issuer: string expirationDate?: string proof: { type?: string created?: string verificationMethod: string proofPurpose: string jws: string } } ```
     *
     * @tags Wallet
     * @name StoreCredentials
     * @request POST:/wallet/credentials
     * @secure
     */
    storeCredentials: (data: SaveCredentialInput, params: RequestParams = {}) =>
      this.request<SaveCredentialOutput, ErrorObject>({
        path: `/wallet/credentials`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Claim a credentials from "credentialOfferRequestToken" callback URL. Claim and store credentials in a wallet. return a list of credentials ids
     *
     * @tags Wallet
     * @name ClaimCredentials
     * @request GET:/wallet/credentials/claim
     * @secure
     */
    claimCredentials: (
      query: {
        credentialOfferRequestToken: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ClaimCredentialOutput, ErrorObject>({
        path: `/wallet/credentials/claim`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get user's credential by credentialId. Use this API endpoint to fetch the details of any one particular credential. Since credentialId is the unique field, you have to pass that as url param.
     *
     * @tags Wallet
     * @name GetCredential
     * @request GET:/wallet/credentials/{id}
     * @secure
     */
    getCredential: (id: string, params: RequestParams = {}) =>
      this.request<GetCredentialOutput, ErrorObject>({
        path: `/wallet/credentials/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete user's credential by credentialId.
     *
     * @tags Wallet
     * @name DeleteCredential
     * @request DELETE:/wallet/credentials/{id}
     * @secure
     */
    deleteCredential: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorObject>({
        path: `/wallet/credentials/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Share user's credential by credentialId. In case the users wants to share their credential, they can do it by using this API endpoint. The API returns two strings namely qrCode and sharingUrl. You can use these string to share the credentials. You will have to pass credentialId in the url. Params: `ttl` (optional) - string, in hours, that defines credential's expiration time after which it should be removed. For example: 96 By default TTL is `96 hours`. If `0` is passed, shared credential will be expired in 100 years. `fieldsToShare` (optional) - array of strings that specify paths from credentialSubject to the end values that should be shared, **works only when VC signed with BBS+ key** Example: { ... context, holder, proof, etc credentialSubject: { data: { Name: 'Jhon Doe', Age: 99, Address: { Street: 'Defined', Home: 17 } } } } To select only name and street you should pass ['data/Name', 'data/Address/Street']
     *
     * @tags Wallet
     * @name ShareCredential
     * @request POST:/wallet/credentials/{id}/share
     * @secure
     */
    shareCredential: (id: string, data: ShareCredentialInput, params: RequestParams = {}) =>
      this.request<ShareCredentialOutput, ErrorObject>({
        path: `/wallet/credentials/${id}/share`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Share user's credentials as a verifiable presentation. Params: `signedPresentation` - W3C presentation `oneTimeUse` (optional) - boolean, flag to specify if shareable URL should be deleted after first sharing (to share QR only once). `false` by default. `ttl` (optional) - string, in specified time, that defines presentation's expiration time after which it should be removed. For example: 5m, 1h, 2w By default TTL is `96 hours` (`96h`). If `0` is passed, shared presentation will be expired in 100 years. Returns raw QR and its image in base64 format.
     *
     * @tags Wallet
     * @name SharePresentation
     * @request POST:/wallet/credentials/share
     * @secure
     */
    sharePresentation: (data: SharePresentationInput, params: RequestParams = {}) =>
      this.request<SharePresentationOutput, ErrorObject>({
        path: `/wallet/credentials/share`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description You will need to sign your VC to add some value to it. Without the signature, credential would be worthless. Note: In the build unsigned VC API, you will receive the response in unsignedVC object. You will have to change the key to unsignedCredential while using the sign credenrial API. Rest all the details are same.
     *
     * @tags Wallet
     * @name SignCredential
     * @request POST:/wallet/sign-credential
     * @secure
     */
    signCredential: (data: SignCredentialInput, params: RequestParams = {}) =>
      this.request<SignCredentialOutput, ErrorObject>({
        path: `/wallet/sign-credential`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sign verifiable presentation. Verifiable presentation or VP can be used for sharing credentials with the verifier, provided Verifier is asking some credentials via a VP request, then holder will pull all the VCs that match the request from the wallet, wrap them into a VP and sign the VP. Put your vs's into `verifiableCredential` array. A VP can be targeted to a specific verifier by using a Linked Data Proof that includes a domain and challenge. This also helps prevent a verifier from reusing a VP as their own. Params: `unsignedPresentation` of UnsignedW3cPresentation type `domain` - can be any string or URI `challenge` - should be a randomly generated string Returns signed verifiable presentation
     *
     * @tags Wallet
     * @name SignPresentation
     * @request POST:/wallet/sign-presentation
     * @secure
     */
    signPresentation: (data: SignPresentationInput, params: RequestParams = {}) =>
      this.request<SignPresentationOutput, ErrorObject>({
        path: `/wallet/sign-presentation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create JWT of credential share request. Verifier can use this API to generate a request token and ask the Holder for the credentials. The details of the required credentials can be passed as parameters. A VP can be targeted to a specific verifier by using a Linked Data Proof that includes a domain and challenge. This also helps prevent a verifier from reusing a VP as their own. Params: `credentialRequirements` - array of credential requirements with credential types `issuerDid` (optional) - DID of the issuer `audienceDid` (optional) - audience of generated token `expiresAt` (optional) - expire date-time of generated token `nonce` (optional) - nonce/jti of generated token `callbackUrl` (optional) Returns JWT with credential share request
     *
     * @tags Wallet
     * @name GenerateCredentialShareRequestToken
     * @request POST:/wallet/credential-share-token/generate-request-token
     * @secure
     */
    generateCredentialShareRequestToken: (
      data: GenerateCredentialShareRequestTokenRequest,
      params: RequestParams = {},
    ) =>
      this.request<ValidateTTL, ErrorObject>({
        path: `/wallet/credential-share-token/generate-request-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create JWT of credential share response. Once the Holder pulls the credentials according to the request token sent by the Verifier he should use this API to create a response token or Verifiable presentation (VP). Then the Verifier can verify those credential using Verify share response API. Params: `credentialShareRequestToken` - JWT with the requested VCs `credentials` - array of signed credentials `expiresAt` (isoString) - (optional) expires of created token, 10 minutes by default Expected `credentials` to be an array of signed credentials. Can be W3C credential or Open Attestation Document ``` OpenAttestationDocument { version: string data: FreeFormObject <- must contain a field `id` signature: { type: string targetHash: string proof: FreeFormObject[] merkleRoot: string } } ``` ``` W3cCredential { '@context': FreeFormObject id: string type: string[] holder: FreeFormObject credentialSubject: FreeFormObject issuanceDate: string issuer: string expirationDate?: string proof: { type?: string created?: string verificationMethod: string proofPurpose: string jws: string } } ``` Returns JWT with credential share response
     *
     * @tags Wallet
     * @name CreateCredentialShareResponseToken
     * @request POST:/wallet/credential-share-token/create-response-token
     * @secure
     */
    createCredentialShareResponseToken: (data: CreateCredentialShareResponseTokenRequest, params: RequestParams = {}) =>
      this.request<ValidateTTL, ErrorObject>({
        path: `/wallet/credential-share-token/create-response-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  messages = {
    /**
     * @description Read encrypted message
     *
     * @tags Messages
     * @name ReadEncryptedMessage
     * @request POST:/messages/read-encrypted-message
     * @secure
     */
    readEncryptedMessage: (data: ReadEncryptedMessageInput, params: RequestParams = {}) =>
      this.request<ReadEncryptedMessageOuput, ErrorObject>({
        path: `/messages/read-encrypted-message`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create encrypted message
     *
     * @tags Messages
     * @name CreateEncryptedMessage
     * @request POST:/messages/create-encrypted-message
     * @secure
     */
    createEncryptedMessage: (data: CreateEncryptedMessageInput, params: RequestParams = {}) =>
      this.request<CreateEncryptedMessageOuput, ErrorObject>({
        path: `/messages/create-encrypted-message`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  share = {
    /**
     * @description Retrieve shared credential by hash. As a holder of a VC, you can generate a temporary share url using Share Credential API. This is how a sharing url looks like: `sharingUrl: https://cloud-wallet-api.prod.affinity-project.org/api/v1/share/4d4f74ef86dcf7534192502d14391d6f976019ad8b4ee881d3ebf7159b01017b?key=aca306a7d4ddd459a805281afa9efc60da97bcc1fd73de9df70252f559d6bb` This API is used to get the shared credential. All you have to do is copy the entire string after the share/ including the part after ?key= and paste it in place of the {hash}. You will receive a Verifiable Credential in the response.
     *
     * @tags Share
     * @name RetrieveSharedCredential
     * @request GET:/share/{hash}
     */
    retrieveSharedCredential: (
      hash: string,
      query: {
        key: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AnyData, ErrorObject>({
        path: `/share/${hash}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Return DID of existing user.
     *
     * @tags User
     * @name GetDid
     * @request GET:/users/get-did
     * @secure
     */
    getDid: (params: RequestParams = {}) =>
      this.request<ValidateTTL, ErrorObject>({
        path: `/users/get-did`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Return info of existing user.
     *
     * @tags User
     * @name GetInfo
     * @request GET:/users/get-info
     * @secure
     */
    getInfo: (params: RequestParams = {}) =>
      this.request<UserInfoOutput, ErrorObject>({
        path: `/users/get-info`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Login an existing user into the wallet. As an `username` **arbitrary username** OR **email** OR **phone number** can be used. Note: Phone number have to start from countrycode `+${countryCode}${phoneNumber}` e.g. +1234567890 (Only international format acceptable) Valid username examples: - great_user - great_user@gmail.com - +1234567890
     *
     * @tags User
     * @name Login
     * @request POST:/users/login
     * @secure
     */
    login: (data: LoginInput, params: RequestParams = {}) =>
      this.request<LoginOutput, ErrorObject>({
        path: `/users/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Signs up a new user. [Generate your API key and API Key Hash.](https://build.affinidi.com/register) Use the API Key Hash as the 'Api-Key' parameter in the header for api calls. As an `username` **arbitrary username** OR **email** OR **phone number** can be used. Note: Phone number have to start from countrycode `+${countryCode}${phoneNumber}` e.g. +1234567890 (Only international format acceptable) Returns an object with a `token` for the **confirmSignUp** endpoint OR an object with an `accessToken`, `refreshToken`, `idToken` and `did` IF **arbitrary username** was provided. Use the `accessToken` received in the response of above API as the Authorization parameter in the header and use the did as holderDid attribute for further API calls. `refreshToken` can be used to login an existing user with refresh token authentication. Note: didMethod jolo is deprecated. Use elem as your didMethod in the payload. Note: If you use arbitrary username you won't be able to use Signup confirm, do the following steps to get `accessToken`: forgot password, change username and passwordless login APIs.
     *
     * @tags User
     * @name SignUp
     * @request POST:/users/signup
     * @secure
     */
    signUp: (data: SignUpInput, params: RequestParams = {}) =>
      this.request<
        | ArbitraryUsernameSignUpOutput
        | EmailSignUpOutput
        | TelSignUpOutput
        | (ArbitraryUsernameSignUpOutput & EmailSignUpOutput & TelSignUpOutput),
        ErrorObject
      >({
        path: `/users/signup`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Confirms sign up of a new user into the wallet. This API can be used for the functionality of account verification. Returns an object with `accessToken`, `refreshToken`, `idToken` and `did` Note: To use this API username should either be an email or a phone number. Phone number have to start from countrycode `+${countryCode}${phoneNumber}` e.g. +1234567890 (Only international format acceptable)
     *
     * @tags User
     * @name ConfirmSignUp
     * @request POST:/users/signup/confirm
     * @secure
     */
    confirmSignUp: (data: ConfirmSignUpInput, params: RequestParams = {}) =>
      this.request<ConfirmSignUpOutput, ErrorObject>({
        path: `/users/signup/confirm`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Signs out user from all devices. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued.
     *
     * @tags User
     * @name Logout
     * @request POST:/users/logout
     * @secure
     */
    logout: (params: RequestParams = {}) =>
      this.request<void, ErrorObject>({
        path: `/users/logout`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Resets password for the user. This API is used in case the user does not remember his/hers password. Note: Username should be a valid email or phone number. Phone number have to start from countrycode `+${countryCode}${phoneNumber}` e.g. +1234567890 (Only international format acceptable)
     *
     * @tags User
     * @name ForgotPassword
     * @request POST:/users/forgot-password
     * @secure
     */
    forgotPassword: (data: ForgotPasswordInput, params: RequestParams = {}) =>
      this.request<void, ErrorObject>({
        path: `/users/forgot-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Resets password for the user. Once the forgot password functionality is initiated, you can use this API to reset password of the user.
     *
     * @tags User
     * @name ForgotPasswordConfirm
     * @request POST:/users/forgot-password/confirm
     * @secure
     */
    forgotPasswordConfirm: (data: ForgotPasswordConfirmInput, params: RequestParams = {}) =>
      this.request<void, ErrorObject>({
        path: `/users/forgot-password/confirm`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Adds an email or a phone number, or changes the existing one. Note that this endpoint name is misleading; it does not **change** username. Username cannot be changed. Field `username` should contain email or a phone number. Note: Phone number have to start from countrycode `+${countryCode}${phoneNumber}` e.g. +1234567890 (Only international format acceptable) In case it contains an email: if this user already has an email, it will be changed (old email can no longer be used to log in passwordlessly); otherwise it will be added. Similarly with the phone number: if this user already has an old phone number, after the change this phone number can no longer be used to log in passwordlessly. In any case, the user will still be able to log in using their username and password
     *
     * @tags User
     * @name ChangeUsername
     * @request POST:/users/change-username
     * @secure
     */
    changeUsername: (data: ChangeUsernameInput, params: RequestParams = {}) =>
      this.request<void, ErrorObject>({
        path: `/users/change-username`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Confirms changing username with providing OTP.
     *
     * @tags User
     * @name ChangeUsernameConfirm
     * @request POST:/users/change-username/confirm
     * @secure
     */
    changeUsernameConfirm: (data: ChangeUsernameConfirmInput, params: RequestParams = {}) =>
      this.request<void, ErrorObject>({
        path: `/users/change-username/confirm`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Updates user's password
     *
     * @tags User
     * @name ChangePassword
     * @request POST:/users/change-password
     * @secure
     */
    changePassword: (data: ChangePasswordInput, params: RequestParams = {}) =>
      this.request<void, ErrorObject>({
        path: `/users/change-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Passwordless sign in - makes login if user exists or sign up otherwise. May not work if user used another username / email / phone number during registration As an `username` **email** OR **phone number** can be used. Note: Phone number have to start from countrycode `+${countryCode}${phoneNumber}` e.g. +1234567890 (Only international format acceptable) Returns an object with a `token` for the **confirmSignIn** endpoint.
     *
     * @tags User
     * @name SignIn
     * @request POST:/users/sign-in-passwordless
     * @secure
     */
    signIn: (data: SignInInput, params: RequestParams = {}) =>
      this.request<ValidateTTL, ErrorObject>({
        path: `/users/sign-in-passwordless`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Passwordless sign in with Truecaller - makes login if user exists or sign up otherwise. The phone number is extracted from the Truecaller profile. Note: Phone number have to start from countrycode `+${countryCode}${phoneNumber}` e.g. +1234567890 (Only international format acceptable) Returns the ID, Refresh and Access tokens on success.
     *
     * @tags User
     * @name SignInWithTruecaller
     * @request POST:/users/sign-in-truecaller
     * @secure
     */
    signInWithTruecaller: (data: SignInWithTuecallerInput, params: RequestParams = {}) =>
      this.request<SignInWithTruecallerOutput, ErrorObject>({
        path: `/users/sign-in-truecaller`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Confirms passwordless sign in to the wallet. Params: token - received from the **signIn** endpoint confirmationCode - OTP code Returns an object with `accessToken`, `refreshToken`, `idToken` and `did`
     *
     * @tags User
     * @name ConfirmSignIn
     * @request POST:/users/sign-in-passwordless/confirm
     * @secure
     */
    confirmSignIn: (data: ConfirmSignInInput, params: RequestParams = {}) =>
      this.request<
        ConfirmSignInOutput,
        | (ErrorObject & {
            code: "COR-5" | "UM-1";
          })
        | ErrorObject
      >({
        path: `/users/sign-in-passwordless/confirm`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Passwordless log in - for cases when user exists already As an `username` **email** OR **phone number** can be used. Note: Phone number have to start from countrycode `+${countryCode}${phoneNumber}` e.g. +1234567890 (Only international format acceptable) Returns an object with a `token` for the **confirmSignIn** endpoint.
     *
     * @tags User
     * @name LogIn
     * @request POST:/users/log-in-passwordless
     * @secure
     */
    logIn: (data: PasswordlessLoginInput, params: RequestParams = {}) =>
      this.request<ValidateTTL, ErrorObject>({
        path: `/users/log-in-passwordless`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Confirms passwordless log in to the wallet. Params: token - received from the **logIn** endpoint confirmationCode - OTP code Returns an object with `accessToken`, `refreshToken`, `idToken` and `did`
     *
     * @tags User
     * @name ConfirmLogIn
     * @request POST:/users/log-in-passwordless/confirm
     * @secure
     */
    confirmLogIn: (data: ConfirmPasswordlessLoginInput, params: RequestParams = {}) =>
      this.request<ConfirmPasswordlessLoginOutput, ErrorObject>({
        path: `/users/log-in-passwordless/confirm`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Logins an existing user to Affinity with refresh token. As an `refreshToken` might be used refresh token previously issued to user on a login. Provides new access token and did. Previously issued tokens could be in use with another user device. Note: During the login or registration process, the client receives an access token that is used later for secure interaction with the system. This token has a limited expiration time (1 hour). After that time, the access token (1 hour by default) becomes unsuitable for further use. Then the user needs to re-login to the system. A refresh token has a longer lifetime (30 days by default) than an access token and can be used by a client application to obtain a new access token without the need for additional user interaction with the application. For example, the user does not need to enter their login and password again.
     *
     * @tags User
     * @name LoginWithRefreshToken
     * @request POST:/users/login-with-refresh-token
     * @secure
     */
    loginWithRefreshToken: (data: LoginWithRefreshTokenInput, params: RequestParams = {}) =>
      this.request<OmitLoginOutputRefreshToken, ErrorObject>({
        path: `/users/login-with-refresh-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  utilities = {
    /**
     * @description Sign JWT object. If you want to create a self-issued auth as JWT then you can use this API to sign that JWT object.
     *
     * @tags Utilities
     * @name SignJwt
     * @request POST:/utilities/sign-jwt
     * @secure
     */
    signJwt: (data: SignJwtInput, params: RequestParams = {}) =>
      this.request<SignJwtOutput, ErrorObject>({
        path: `/utilities/sign-jwt`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
