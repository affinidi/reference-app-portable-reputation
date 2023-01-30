import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { hostUrl } from "../pages/env";
import { getItemFromSessionStorage } from "./useSessionStorage";

export type ErrorResponse = {
  name: string;
  traceId: string;
  message: string;
  details: {
    field: string;
    issue: string;
    location: string;
  };
};

export type SignInInput = {
  username: string;
};

export const signIn = async (input: SignInInput): Promise<string> => {
  const {
    data: { token },
  } = await axios<{ token: string }>(`${hostUrl}/api/cloud-wallet/sign-in`, {
    method: "POST",
    data: input,
  });

  return token;
};

export type ConfirmSignInInput = {
  token: string;
  confirmationCode: string;
};

export type ConfirmSignInOutput = {
  accessToken: string;
};

export const confirmSignIn = async (
  input: ConfirmSignInInput
): Promise<ConfirmSignInOutput> => {
  const {
    data: { accessToken },
  } = await axios<{ accessToken: string }>(
    `${hostUrl}/api/cloud-wallet/confirm-sign-in`,
    {
      method: "POST",
      data: input,
    }
  );

  return { accessToken };
};

export const getDid = async (): Promise<string> => {
  const {
    data: { did },
  } = await axios<{ did: string }>(`${hostUrl}/api/cloud-wallet/get-did`, {
    method: "GET",
    headers: createCloudWalletAuthenticationHeaders(),
  });

  return did;
};

export const logout = async () => {
  try {
    await axios<void>(`${hostUrl}/api/cloud-wallet/logout`, {
      method: "POST",
      headers: createCloudWalletAuthenticationHeaders(),
    });
  } catch (e) {}
};

export const createCloudWalletAuthenticationHeaders = () => {
  const cloudWalletAccessToken = getItemFromSessionStorage(
    "cloudWalletAccessToken"
  );
  return {
    ...(cloudWalletAccessToken && { Authorization: cloudWalletAccessToken }),
  };
};

export const useSignInMutation = () => {
  return useMutation<string, ErrorResponse, SignInInput, () => void>(signIn);
};

export const useConfirmSignInMutation = () => {
  return useMutation<
    ConfirmSignInOutput,
    ErrorResponse,
    ConfirmSignInInput,
    () => void
  >(confirmSignIn);
};

export type UserState = {
  authorized: boolean;
  loading: boolean;
};

const BASIC_STATE: UserState = {
  authorized: false,
  loading: true,
};

export const useAuthentication = () => {
  const [authState, setAuthState] = useState<UserState>(BASIC_STATE);

  const authenticate = async () => {
    try {
      await getDid();

      setAuthState((prevState) => ({
        ...prevState,
        loading: false,
        authorized: true,
      }));
    } catch (error) {
      setAuthState((prevState) => ({
        ...prevState,
        loading: false,
        authorized: false,
      }));
    }
  };

  return { authState, setAuthState, authenticate };
};
