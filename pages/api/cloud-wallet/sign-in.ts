import { z } from 'zod'
import { use } from 'next-api-middleware'
import type { NextApiRequest, NextApiResponse } from 'next'
import { allowedHttpMethods } from '../middlewares/allowed-http-methods'
import { errorHandler } from '../middlewares/error-handler'
import { cloudWalletClient } from '../clients/cloud-wallet-client'

type HandlerResponse = {
  token: string
}

const requestSchema = z.object({
  username: z.string(),
}).strict()

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const { username } = requestSchema.parse(req.body)

  const { token } = await cloudWalletClient.signInPasswordless({ username })

  res.status(200).json({ token })
};

export default use(allowedHttpMethods('POST'), errorHandler)(handler)
