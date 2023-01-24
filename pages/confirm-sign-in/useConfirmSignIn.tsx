import { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useSessionStorage } from "../../hooks/useSessionStorage";
import { useConfirmSignInForm } from "./ConfirmSignInForm/useConfirmSignInForm";
import {
  useConfirmSignInMutation,
  useSignInMutation,
} from "../../hooks/useAuthentication";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CheckCredentials } from "pages/profile-setup";

export const useConfirmSignIn = () => {
  const storage = useSessionStorage();
  const navigate = useRouter();
  const { authState, updateAuthState } = useAuthContext();
  const { data, error, mutateAsync } = useConfirmSignInMutation();
  const { data: signInData, mutateAsync: signInMutateAsync } =
    useSignInMutation();
  const { computedCode, inputs, isButtonDisabled } = useConfirmSignInForm(
    error?.message
  );

  const handleResendCode = async () => {
    if (!authState.username) {
      navigate.push("/sign-in");
      return;
    }
    await signInMutateAsync({ username: authState.username });
  };

  const checkIfConnected = async () => {
    const reputationVcs = await CheckCredentials();
    if (reputationVcs) navigate.push("/github");
    if (!reputationVcs) navigate.push("/profile-setup");
  };

  const onSubmit = async (e?: SyntheticEvent) => {
    e?.preventDefault();
    await mutateAsync({
      token: storage.getItem("signUpToken") || "",
      confirmationCode: computedCode,
    });
  };

  useEffect(() => {
    if (authState.username === "") {
      navigate.push("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState, updateAuthState]);

  useEffect(() => {
    if (data) {
      storage.setItem("accessToken", data.accessToken);
      updateAuthState({
        ...authState,
        loading: false,
        authorized: true,
      });
      // if (!error) navigate.push("/profile-setup");
      if (!error) checkIfConnected();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  useEffect(() => {
    if (signInData) {
      storage.setItem("signUpToken", signInData);
    }
  }, [signInData, storage]);
  return { error, onSubmit, inputs, isButtonDisabled, handleResendCode };
};
