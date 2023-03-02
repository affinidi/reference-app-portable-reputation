import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'

import { hostUrl } from 'pages/env'
import { VerifiableCredential } from 'types/vc'
import { createCloudWalletAuthenticationHeaders } from 'hooks/useAuthentication'
import { ROUTES } from 'utils'
import { ErrorResponse } from 'types/error'

type VcProfiles = {
  [profile: string]: VerifiableCredential | undefined
}

const useVcProfiles = () => {
  const importGithubProfile = async () => {
    await signIn('github', { callbackUrl: ROUTES.githubCallback })
  }
  const data = useQuery<{ vcs: VcProfiles }, ErrorResponse>(
    ['getVcs'],
    async () => {
      const {
        data: { vcs },
      } = await axios(`${hostUrl}/api/profiles/get-vcs`, {
        method: 'GET',
        headers: createCloudWalletAuthenticationHeaders(),
      })

      return {
        vcs,
      }
    },
    { retry: false }
  )

  return { ...data, importGithubProfile }
}

export default useVcProfiles
