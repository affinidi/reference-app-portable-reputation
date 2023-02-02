import { z } from 'zod'
import { use } from 'next-api-middleware'
import type { NextApiRequest, NextApiResponse } from 'next'
import { allowedHttpMethods } from '../middlewares/allowed-http-methods'
import { errorHandler } from '../middlewares/error-handler'
import { cloudWalletClient } from '../clients/cloud-wallet-client'

type HandlerResponse = {
  accessToken: string;
};

const requestSchema = z
  .object({
    token: z.string(),
    confirmationCode: z.string(),
  })
  .strict()

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const { token, confirmationCode } = requestSchema.parse(req.body)

  const { accessToken } = await cloudWalletClient.confirmSignInPasswordless({
    token,
    confirmationCode,
  })

  res.status(200).json({ accessToken })
}

export default use(allowedHttpMethods('POST'), errorHandler)(handler)
