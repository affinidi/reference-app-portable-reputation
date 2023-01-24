import { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useSessionStorage } from "../../hooks/useSessionStorage";
import { useConfirmSignInForm } from "./ConfirmSignInForm/useConfirmSignInForm";
import {
  useConfirmSignInMutation,
  useSignInMutation,
} from "../../hooks/useAuthentication";
import { useAuthContext } from "../../hooks/useAuthContext";
import { cloudWalletService } from "../../services/cloud-wallet";
import { StoredW3CCredential } from "services/cloud-wallet/cloud-wallet.api";

export const useConfirmSignIn = () => {
  const storage = useSessionStorage();
  const navigate = useRouter();
  const router = useRouter();
  const { authState, updateAuthState } = useAuthContext();
  const { data, error, mutateAsync } = useConfirmSignInMutation();
  const { data: signInData, mutateAsync: signInMutateAsync } =
    useSignInMutation();
  const { computedCode, inputs, isButtonDisabled } = useConfirmSignInForm(
    error?.message
  );
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const handleResendCode = async () => {
    if (!authState.username) {
      navigate.push("/sign-in");
      return;
    }
    await signInMutateAsync({ username: authState.username });
  };

  const onSubmit = async (e?: SyntheticEvent) => {
    e?.preventDefault();
    await mutateAsync({
      token: storage.getItem("signInToken") || "",
      confirmationCode: computedCode,
    });
  };

  useEffect(() => {
    const checkCredentials = async () => {
      const vcs = await cloudWalletService.getAllCredentials();

      const reputationVcs = vcs.filter((vc) =>
        (vc as StoredW3CCredential).type?.includes("PortableReputation")
      ) as StoredW3CCredential[];

      if (reputationVcs) {
        setIsConnected(true);
      }
    };

    checkCredentials();
  }, []);

  useEffect(() => {
    if (authState.username === "") {
      navigate.push("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState, updateAuthState]);

  useEffect(() => {
    if (data) {
      storage.setItem("cloudWalletAccessToken", data.accessToken);
      updateAuthState({
        ...authState,
        loading: false,
        authorized: true,
      });
      if (!error && !isConnected) {
        navigate.push("/profile-setup");
      } else if (!error && isConnected) {
        router.push("/github");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isConnected, router]);

  useEffect(() => {
    if (signInData) {
      storage.setItem("signInToken", signInData);
    }
  }, [signInData, storage]);
  return { error, onSubmit, inputs, isButtonDisabled, handleResendCode };
};
