import { use } from 'next-api-middleware'
import type { NextApiRequest, NextApiResponse } from 'next'
import { allowedHttpMethods } from '../middlewares/allowed-http-methods'
import { errorHandler } from '../middlewares/error-handler'
import { authenticateCloudWallet } from '../helpers/authenticate-cloud-wallet'
import { cloudWalletClient } from '../clients/cloud-wallet-client'

type HandlerResponse = {
  did: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<HandlerResponse>) {
  const accessToken = authenticateCloudWallet(req)

  const { did } = await cloudWalletClient.getDid({ accessToken })

  res.status(200).json({ did })
}

export default use(allowedHttpMethods('GET'), errorHandler)(handler)
