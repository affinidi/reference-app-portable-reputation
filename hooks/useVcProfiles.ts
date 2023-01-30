import axios from "axios";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { hostUrl } from "pages/env";
import { createCloudWalletAuthenticationHeaders } from "hooks/useAuthentication";
import { ProfileVcMap } from '../types/profile';

const useVcProfiles = (): ProfileVcMap | undefined => {
  const [vcs, setVcs] = useState<ProfileVcMap>();
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    async function fetchVcProfiles() {
      const {
        data: { vcs },
      } = await axios<{ vcs: ProfileVcMap }>(`${hostUrl}/api/profiles/get-vcs`, {
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
