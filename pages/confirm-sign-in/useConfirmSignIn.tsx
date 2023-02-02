import { SyntheticEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useSessionStorage } from 'hooks/useSessionStorage'
import { useConfirmSignInForm } from './ConfirmSignInForm/useConfirmSignInForm'
import {
  useConfirmSignInMutation,
  useSignInMutation,
} from 'hooks/useAuthentication'
import { useAuthContext } from 'hooks/useAuthContext'

export const useConfirmSignIn = () => {
  const storage = useSessionStorage()
  const router = useRouter()
  const { setAuthState } = useAuthContext()
  const { data, error, mutateAsync } = useConfirmSignInMutation()
  const { data: signInData, mutateAsync: signInMutateAsync } =
    useSignInMutation()
  const { computedCode, inputs, isButtonDisabled } = useConfirmSignInForm(
    error?.message
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleResendCode = async () => {
    const username = storage.getItem('signInUsername')
    if (username) {
      await signInMutateAsync({ username })
    } else {
      await router.push('/sign-in')
    }
  }

  const onSubmit = async (e?: SyntheticEvent) => {
    e?.preventDefault()
    setIsLoading(true)

    await mutateAsync({
      token: storage.getItem('signInToken') || '',
      confirmationCode: computedCode,
    })
  }

  useEffect(() => {
    if (data) {
      storage.setItem('cloudWalletAccessToken', data.accessToken)
      setAuthState((prevState) => ({
        ...prevState,
        authorized: true,
        loading: false,
      }))
    }
  }, [data, error, router, setAuthState])

  useEffect(() => {
    if (signInData) {
      storage.setItem('signInToken', signInData)
    }
  }, [signInData, storage])

  return {
    error,
    onSubmit,
    inputs,
    isButtonDisabled,
    handleResendCode,
    isLoading,
  }
}
