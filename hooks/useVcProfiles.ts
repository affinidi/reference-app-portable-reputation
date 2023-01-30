import axios from "axios";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { hostUrl } from "pages/env";
import { VerifiableCredential } from "types/vc";
import { createCloudWalletAuthenticationHeaders } from "hooks/useAuthentication";

type VcProfiles = {
  [profile: string]: VerifiableCredential | undefined;
};

const useVcProfiles = (): VcProfiles | undefined => {
  const [vcs, setVcs] = useState<VcProfiles>();
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    async function fetchVcProfiles() {
      const {
        data: { vcs },
      } = await axios(`${hostUrl}/api/profiles/get-vcs`, {
        method: "GET",
        headers: createCloudWalletAuthenticationHeaders(),
      });

      setVcs(vcs);
    }

    fetchVcProfiles();
  }, [status]);

  return vcs;
};

export default useVcProfiles;
