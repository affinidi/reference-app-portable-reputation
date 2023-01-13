/* eslint-disable @typescript-eslint/no-explicit-any */
import { clearSessionStorage, getItemFromSessionStorage } from '../../hooks/useSessionStorage'
import {
  Api as CloudWalletApi,
  ConfirmSignInInput,
  ErrorObject,
  SaveCredentialInput,
  SignInInput,
} from './cloud-wallet.api'

export const isHttpError = (
  object: unknown,
): object is {
  error: ErrorObject
} => {
  return Object.prototype.hasOwnProperty.call(object, 'error')
}
class CloudWalletService {
  constructor(
    private readonly client = new CloudWalletApi({
      baseUrl: `${process.env.AFFINIDI_CLOUD_WALLET_URL}/api/v1`,
      baseApiParams: {
        headers: {
          'Api-Key': `${process.env.AFFINIDI_API_KEY_HASH}`,
          'Content-Type': 'application/json',
        },
      },
    }),
  ) {}

  signInPasswordless = async ({ username }: SignInInput) => {
    try {
      const result = await this.client.users.signIn({ username })

      return result.data
    } catch (error: any) {
      throw new Error(error?.error?.message)
    }
  }

  confirmSignInPasswordless = async (input: ConfirmSignInInput) => {
    try {
      const result = await this.client.users.confirmSignIn(input)
      return result.data
    } catch (error: unknown) {
      if (!isHttpError(error)) {
        throw error
      }
      if (error?.error.code === 'COR-5') {
        throw new Error('Code is incorrect, please try again.')
      }

      throw new Error(error?.error.message)
    }
  }

  logOut = async () => {
    try {
      await this.client.users.logout({
        headers: {
          Authorization: getItemFromSessionStorage('accessToken') || '',
        },
      })
      clearSessionStorage()
    } catch (error: any) {
      throw new Error(error?.error?.message)
    }
  }

  getDid = async () => {
    try {
      const response = await this.client.users.getDid({
        headers: {
          Authorization: getItemFromSessionStorage('accessToken') || '',
        },
      })
      return response.data
    } catch (error: any) {
      throw new Error(error?.error?.message)
    }
  }

  getAllCredentials = async () => {
    try {
      const response = await this.client.wallet.getCredentials(
        {},
        {
          headers: {
            Authorization: getItemFromSessionStorage('accessToken') || '',
          },
        },
      )
      return response.data
    } catch (error: any) {
      throw new Error(error?.error?.message)
    }
  }

  getCredentialById = async (id: string) => {
    try {
      const response = await this.client.wallet.getCredential(id, {
        headers: {
          Authorization: getItemFromSessionStorage('accessToken') || '',
        },
      })
      return response.data
    } catch (error: any) {
      throw new Error(error?.error?.message)
    }
  }

  deleteCredentialById = async (id: string) => {
    try {
      const response = await this.client.wallet.deleteCredential(id, {
        headers: {
          Authorization: getItemFromSessionStorage('accessToken') || '',
        },
      })
      return response
    } catch (error: any) {
      throw new Error(error?.error?.message)
    }
  }

  claimCredential = async (token: string) => {
    try {
      const response = await this.client.wallet.claimCredentials(
        {
          credentialOfferRequestToken: token,
        },
        {
          headers: {
            Authorization: getItemFromSessionStorage('accessToken') || '',
          },
        },
      )
      return response.data
    } catch (error: any) {
      throw new Error(error?.error?.message)
    }
  }

  shareCredential = async (id: string) => {
    try {
      const response = await this.client.wallet.shareCredential(
        id,
        {},
        {
          headers: {
            Authorization: getItemFromSessionStorage('accessToken') || '',
          },
        },
      )
      return response.data
    } catch (error: any) {
      throw new Error(error?.error?.message)
    }
  }

  retrieveSharedCredential = async (hash: string, key: string) => {
    try {
      const response = await this.client.share.retrieveSharedCredential(hash, { key })
      return response.data
    } catch (error: any) {
      throw new Error(error?.error?.message)
    }
  }

  storeCredentials = async (data: SaveCredentialInput) => {
    try {
      const response = await this.client.wallet.storeCredentials(data, {
        headers: {
          Authorization: getItemFromSessionStorage('accessToken') || '',
        },
      })
      return response.data
    } catch (error: any) {
      throw new Error(error?.error?.message)
    }
  }
}

const cloudWalletService = new CloudWalletService()

export { cloudWalletService }
