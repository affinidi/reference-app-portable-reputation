import axios from 'axios'
import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'

import { hostUrl } from 'pages/env'
import { VerifiableCredential } from 'types/vc'
import { createCloudWalletAuthenticationHeaders } from 'hooks/useAuthentication'
import { ROUTES } from 'utils'

type VcProfiles = {
  [profile: string]: VerifiableCredential | undefined;
};

const useVcProfiles = () => {
  const [vcs, setVcs] = useState<VcProfiles>()
  const { status } = useSession()

  const importGithubProfile = async () => {
    await signIn('github', { callbackUrl: ROUTES.githubCallback })
  }

  useEffect(() => {
    if (status === 'loading') return

    async function fetchVcProfiles() {
      const {
        data: { vcs },
      } = await axios(`${hostUrl}/api/profiles/get-vcs`, {
        method: 'GET',
        headers: createCloudWalletAuthenticationHeaders(),
      })

      setVcs(vcs)
    }

    fetchVcProfiles()
  }, [status])

  return {
    vcs,
    importGithubProfile,
  }
}

export default useVcProfiles
