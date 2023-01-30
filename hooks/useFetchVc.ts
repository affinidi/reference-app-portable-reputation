import axios from "axios";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { hostUrl } from "pages/env";
import { VerifiableCredential } from "types/vc";
import { createCloudWalletAuthenticationHeaders } from "hooks/useAuthentication";

type VcProfiles = {
  [profile: string]: VerifiableCredential | undefined;
};

const useVcFetch = (): VcProfiles | undefined => {
  const [vcs, setVcs] = useState<VcProfiles>();
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    async function fetchVc() {
      const { data } = await axios(
        `${hostUrl}/api/cloud-wallet/get-profile-vcs`,
        {
          method: "GET",
          headers: createCloudWalletAuthenticationHeaders(),
        }
      );

      setVcs(data);
    }

    fetchVc();
  }, [status]);

  return vcs;
};

export default useVcFetch;
