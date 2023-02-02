// TODO: replace with client-sdk

import axios from 'axios'
import { VerifiableCredential } from 'types/vc'
import { apiKeyHash, cloudWalletApiUrl } from '../env'

type Options = {
  accessToken: string;
};

export const cloudWalletClient = {
  signInPasswordless: async (input: {
    username: string;
  }): Promise<{ token: string }> => {
    const { data: token } = await axios<string>(
      `${cloudWalletApiUrl}/v1/users/sign-in-passwordless`,
      {
        method: 'POST',
        headers: {
          'Api-Key': apiKeyHash,
        },
        data: input,
      }
    )

    return { token }
  },
  confirmSignInPasswordless: async (input: {
    token: string;
    confirmationCode: string;
  }): Promise<{ accessToken: string }> => {
    const {
      data: { accessToken },
    } = await axios<{ accessToken: string }>(
      `${cloudWalletApiUrl}/v1/users/sign-in-passwordless/confirm`,
      {
        method: 'POST',
        headers: {
          'Api-Key': apiKeyHash,
        },
        data: input,
      }
    )

    return { accessToken }
  },
  getDid: async (options: Options): Promise<{ did: string }> => {
    const { data: did } = await axios<string>(
      `${cloudWalletApiUrl}/v1/users/get-did`,
      {
        method: 'GET',
        headers: {
          'Api-Key': apiKeyHash,
          Authorization: options.accessToken,
        },
      }
    )

    return { did }
  },
  logout: async (options: Options): Promise<void> => {
    await axios<void>(`${cloudWalletApiUrl}/v1/users/logout`, {
      method: 'POST',
      headers: {
        'Api-Key': apiKeyHash,
        Authorization: options.accessToken,
      },
    })
  },
  getCredentials: async (input: {}, options: Options): Promise<{ vcs: VerifiableCredential[] }> => {
    const { data: vcs } = await axios<VerifiableCredential[]>(
      `${cloudWalletApiUrl}/v1/wallet/credentials`,
      {
        method: 'GET',
        headers: {
          'Api-Key': apiKeyHash,
          Authorization: options.accessToken,
        },
      }
    )

    return { vcs }
  },
  signCredential: async (input: { vc: VerifiableCredential }, options: Options): Promise<{ vc: VerifiableCredential }> => {
    const {
      data: { signedCredential: vc },
    } = await axios<{ signedCredential: VerifiableCredential }>(
      `${cloudWalletApiUrl}/v1/wallet/sign-credential`,
      {
        method: 'POST',
        headers: {
          'Api-Key': apiKeyHash,
          Authorization: options.accessToken,
        },
        data: {
          unsignedCredential: input.vc,
        },
      }
    )

    return { vc }
  },
  storeCredentials: async (
    input: { vcs: VerifiableCredential[] },
    options: Options
  ): Promise<void> => {
    await axios<void>(`${cloudWalletApiUrl}/v1/wallet/credentials`, {
      method: 'POST',
      headers: {
        'Api-Key': apiKeyHash,
        Authorization: options.accessToken,
      },
      data: {
        data: input.vcs,
      },
    })
  },
}
