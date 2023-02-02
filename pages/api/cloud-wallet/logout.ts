import { use } from 'next-api-middleware'
import type { NextApiRequest, NextApiResponse } from 'next'
import { allowedHttpMethods } from '../middlewares/allowed-http-methods'
import { errorHandler } from '../middlewares/error-handler'
import { authenticateCloudWallet } from '../helpers/authenticate-cloud-wallet'
import { cloudWalletClient } from '../clients/cloud-wallet-client'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  const accessToken = authenticateCloudWallet(req)

  await cloudWalletClient.logout({ accessToken })

  res.status(200).end()
};

export default use(allowedHttpMethods('POST'), errorHandler)(handler)
