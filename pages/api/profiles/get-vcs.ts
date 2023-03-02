import { use } from 'next-api-middleware'
import type { NextApiRequest, NextApiResponse } from 'next'

import { VerifiableCredential } from 'types/vc'
import { ErrorCodes } from 'utils/errorCodes'
import { Profile } from 'types/profile'

import { allowedHttpMethods } from '../middlewares/allowed-http-methods'
import { errorHandler } from '../middlewares/error-handler'
import { authenticateCloudWallet } from '../helpers/authenticate-cloud-wallet'
import { cloudWalletClient } from '../clients/cloud-wallet-client'
import { ApiError } from '../api-error'

type HandlerResponse = {
  vcs: {
    [profile in Profile]?: VerifiableCredential
  }
}

const PROFILE_VC_TYPES: { profile: Profile; type: string }[] = [
  { profile: 'github', type: 'GithubProfile' },
]

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const accessToken = authenticateCloudWallet(req)

  try {
    const { vcs } = await cloudWalletClient.getCredentials({}, { accessToken })

    // sort by issuance date (descending)
    vcs.sort(
      (vc1, vc2) => Date.parse(vc2.issuanceDate) - Date.parse(vc1.issuanceDate)
    )

    const response: HandlerResponse = { vcs: {} }
    for (const { profile, type } of PROFILE_VC_TYPES) {
      const vc = vcs.find((vc) => vc.type.includes(type))
      if (vc) {
        response.vcs[profile] = vc
      }
    }

    res.status(200).json(response)
  } catch (error: any) {
    if (error.response?.data?.code === ErrorCodes.CWA_4) {
      throw new ApiError({
        code: ErrorCodes.JWT_EXPIRED_ERROR,
        httpStatusCode: 400,
      })
    }
    throw error
  }
}

export default use(allowedHttpMethods('GET'), errorHandler)(handler)
