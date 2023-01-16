import type { NextApiRequest, NextApiResponse } from 'next'
import { cloudWalletService } from '../../../services/cloud-wallet'
import { SignInInput } from '../../../services/cloud-wallet/cloud-wallet.api'

const handler = async (req: NextApiRequest, res: NextApiResponse<string>) => {
  try {
    const { username } = req.body as SignInInput
    const result = await cloudWalletService.signInPasswordless({ username })
    res.status(200).json(result)
  } catch (error: any) {
    throw new Error('something went wrong')
  }
}

export default handler
