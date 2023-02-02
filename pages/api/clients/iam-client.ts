// TODO: replace with client-sdk

import axios from 'axios'
import { affinidiIamApiUrl, apiKeyHash } from '../env'

export const iamClient = {
  authenticateCloudWallet: async (input: {
    did: string;
  }): Promise<{ wallet: { accessToken: string } }> => {
    const {
      data: {
        wallet: { accessToken },
      },
    } = await axios<{ wallet: { accessToken: string } }>(
      `${affinidiIamApiUrl}/v1/cloud-wallet/${input.did}/authenticate`,
      {
        method: 'POST',
        headers: {
          'Api-Key': apiKeyHash,
        },
      }
    )

    return { wallet: { accessToken } }
  },
}
