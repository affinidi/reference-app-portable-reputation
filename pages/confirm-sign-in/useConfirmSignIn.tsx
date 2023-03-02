import { SyntheticEvent, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useSessionStorage } from 'hooks/useSessionStorage'
import { useAuthContext } from 'hooks/useAuthContext'
import {
  useConfirmSignInMutation,
  useSignInMutation,
} from 'hooks/useAuthentication'

import { useConfirmSignInForm } from './ConfirmSignInForm/useConfirmSignInForm'

export const useConfirmSignIn = () => {
  const storage = useSessionStorage()
  const router = useRouter()
  const { setAuthState, authState } = useAuthContext()
  const { data, error, mutate, reset, isLoading } = useConfirmSignInMutation()
  const { data: signInData, mutate: signInMutateAsync } = useSignInMutation()
  const { computedCode, inputs, isButtonDisabled, resetInputs } = useConfirmSignInForm(
    error
  )

  useEffect(() => {
    if (error && computedCode.length < inputs.length) {
      reset()
    }
  }, [computedCode, error, inputs.length, reset])

  const handleResendCode = async () => {
    reset()
    resetInputs()
    const username = storage.getItem('signInUsername')
    if (username) {
      signInMutateAsync({ username })
    } else {
      await router.push('/sign-in')
    }
  }

  const onSubmit = async (e?: SyntheticEvent) => {
    e?.preventDefault()

    mutate({
      token: storage.getItem('signInToken') || '',
      confirmationCode: computedCode,
    })
  }

  useEffect(() => {
    if (data && !authState.authorized) {
      storage.setItem('cloudWalletAccessToken', data.accessToken)
      setAuthState((prevState) => ({
        ...prevState,
        authorized: true,
        loading: false,
      }))
    }
  }, [authState, data, error, router, setAuthState, storage])

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
