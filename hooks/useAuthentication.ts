import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
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
  const response = await axios<string>(`${hostUrl}/api/cloud-wallet/sign-in`, {
    method: "POST",
    data: input,
  });
  return response.data
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
  const response = await axios<ConfirmSignInOutput>(`${hostUrl}/api/cloud-wallet/confirm-sign-in`, {
    method: "POST",
    data: input,
  });

  return response.data;
};

export const getDid = async (): Promise<string> => {
  const response = await axios<{ did: string }>(`${hostUrl}/api/cloud-wallet/get-did`, {
    method: "GET",
    headers: createCloudWalletAuthenticationHeaders(),
  });

  return response.data.did;
};

export const logout = async () => {
  try {
    await axios<void>(`${hostUrl}/api/cloud-wallet/logout`, {
      method: "POST",
      headers: {
        ...createCloudWalletAuthenticationHeaders(),
      },
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

/** Holder's Cloud Wallet authentication */
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
