import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { cloudWalletService } from "services/cloud-wallet";
import {
  ConfirmSignInInput,
  ConfirmSignInOutput,
  SignInInput,
} from "services/cloud-wallet/cloud-wallet.api";

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

export const signIn = async ({ username }: SignInInput): Promise<string> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/affinidi/sign-in`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
    }
  );
  if (![200, 201].includes(response.status)) {
    throw Error();
  }
  return response.json();
};

export const confirmSignIn = async ({
  token,
  confirmationCode,
}: ConfirmSignInInput): Promise<ConfirmSignInOutput> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/affinidi/confirm-sign-in`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        confirmationCode,
      }),
    }
  );

  return response.json();
};

export const logout = async () => {
  try {
    await cloudWalletService.logOut();
  } catch (e) {}
};

export const useSignInMutation = () => {
  return useMutation<string, ErrorResponse, SignInInput, () => void>(
    (data: SignInInput) => signIn(data)
  );
};

export const useConfirmSignInMutation = () => {
  return useMutation<
    ConfirmSignInOutput,
    ErrorResponse,
    ConfirmSignInInput,
    () => void
  >((data: ConfirmSignInInput) => confirmSignIn(data));
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

  const authenticate = async () => {
    try {
      const response = await cloudWalletService.getDid();

      if (response) {
        setAuthState((prevState) => ({
          ...prevState,
          loading: false,
          authorized: true,
        }));
      }
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
