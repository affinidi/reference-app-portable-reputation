import type { NextApiRequest, NextApiResponse } from 'next'
import { cloudWalletService } from '../../../services/cloud-wallet'
import {
  ConfirmSignInInput,
  ConfirmSignInOutput,
} from '../../../services/cloud-wallet/cloud-wallet.api'

const handler = async (req: NextApiRequest, res: NextApiResponse<ConfirmSignInOutput>) => {
  try {
    const { token, confirmationCode } = req.body as ConfirmSignInInput
    const result = await cloudWalletService.confirmSignInPasswordless({ token, confirmationCode })
    res.status(200).json(result)
  } catch (error) {
    throw error
  }
}

export default handler
