import { useSession } from "next-auth/react";
import { hostUrl } from "pages/env";
import { createCloudWalletAuthenticationHeaders } from "hooks/useAuthentication";
import { useState, useEffect } from "react";
import axios from "axios";

const useVcFetch = () => {
  const [vcs, setVcs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    }

    fetchVc();
  }, [status]);

  return [vcs, isLoading];
};

export default useVcFetch;
