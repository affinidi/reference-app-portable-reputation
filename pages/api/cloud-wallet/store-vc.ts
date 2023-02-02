import { z } from 'zod'
import { use } from 'next-api-middleware'
import type { NextApiRequest, NextApiResponse } from 'next'
import { authenticateCloudWallet } from '../helpers/authenticate-cloud-wallet'
import { allowedHttpMethods } from '../middlewares/allowed-http-methods'
import { errorHandler } from '../middlewares/error-handler'
import { cloudWalletClient } from '../clients/cloud-wallet-client'
import { VerifiableCredential } from 'types/vc'

const requestSchema = z
  .object({
    vc: z.unknown(),
  })
  .strict()

async function handler(req: NextApiRequest, res: NextApiResponse<void>) {
  const accessToken = authenticateCloudWallet(req)

  const { vc } = requestSchema.parse(req.body)

  await cloudWalletClient.storeCredentials(
    {
      vcs: [vc as VerifiableCredential],
    },
    { accessToken }
  )

  res.status(200).end()
}

export default use(allowedHttpMethods('POST'), errorHandler)(handler)
