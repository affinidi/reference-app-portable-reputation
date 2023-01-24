import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import { hostUrl } from '../pages/env';
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
  username: string
}

export const signIn = async (input: SignInInput): Promise<string> => {
  const response = await fetch(`${hostUrl}/api/cloud-wallet/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  if (![200, 201].includes(response.status)) {
    throw Error();
  }
  return response.json();
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
  const response = await fetch(`${hostUrl}/api/cloud-wallet/confirm-sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  return response.json();
};

export const getDid = async (): Promise<string> => {
  const response = await fetch(`${hostUrl}/api/cloud-wallet/get-did`, {
    method: "GET",
    headers: {
      Authorization: getItemFromSessionStorage("cloudWalletAccessToken"),
    },
  });

  return response.json();
};

export const logout = async () => {
  try {
    await fetch(`${hostUrl}/api/cloud-wallet/confirm-sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getItemFromSessionStorage("cloudWalletAccessToken"),
      },
    });
  } catch (e) {}
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
  username: string;
  authorized: boolean;
  loading: boolean;
};

const BASIC_STATE: UserState = {
  username: "",
  authorized: false,
  loading: true,
};

export const useAuthentication = () => {
  const [authState, setAuthState] = useState<UserState>(BASIC_STATE);

  const updatePartiallyState =
    <T>(updateFunction: Dispatch<SetStateAction<T>>) =>
    (newState: Partial<T>) => {
      updateFunction((prev) => ({ ...prev, ...newState }));
    };
  const updateAuthState = updatePartiallyState<typeof authState>(setAuthState);

  const authenticate = async () => {
    try {
      const response = await getDid();
      if (response) {
        updateAuthState({ loading: false, authorized: true });
      }
    } catch (error) {
      updateAuthState({ loading: false, authorized: false });
    }
  };

  return { authState, setAuthState, updateAuthState, authenticate };
};
