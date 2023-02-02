import { NextApiRequest } from 'next'
import { ApiError } from '../api-error'

export function authenticateCloudWallet(req: NextApiRequest): string {
  const cloudWalletAccessToken = req.headers['authorization']

  if (!cloudWalletAccessToken) {
    throw new ApiError({
      code: 'CLOUD_WALLET_NOT_AUTHENTICATED',
      message: 'Cloud Wallet access token is not present in the "Authorization" header',
      httpStatusCode: 401,
    })
  }

  return cloudWalletAccessToken
}
