import { FC, useEffect } from "react";
import axios from "axios";
import { Spinner } from "components";
import { useSession } from "next-auth/react";
import {
  createCloudWalletAuthenticationHeaders,
  getDid,
} from "hooks/useAuthentication";
import { VerifiableCredential } from "types/vc";
import { useRouter } from "next/router";
import { ROUTES } from "utils";
import { hostUrl } from "pages/env";

const GithubCallback: FC = () => {
  const { push } = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    async function issueVc() {
      const holderDid = await getDid();

      const {
        data: { vc },
      } = await axios<{ vc: VerifiableCredential }>(
        `${hostUrl}/api/github/issue-vc`,
        {
          method: "POST",
          data: {
            holderDid,
          },
        }
      );

      await axios(`${hostUrl}/api/cloud-wallet/store-vc`, {
        method: "POST",
        headers: createCloudWalletAuthenticationHeaders(),
        data: { vc },
      });

      await push(ROUTES.github);
    }

    issueVc();
  }, [push, status]);

  return <Spinner />;
};

export default GithubCallback;
