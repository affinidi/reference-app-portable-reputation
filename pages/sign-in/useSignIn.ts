import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { SignInInput } from '../../services/cloud-wallet/cloud-wallet.api'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useSignInMutation } from '../../hooks/useAuthentication'

export const useSignIn = () => {
  const [signInInput, setSignInInput] = useState<SignInInput>({ username: '' })
  const [inputError, setInputError] = useState<string | null>(null)
  const navigate = useRouter()
  const storage = useSessionStorage()
  const { authState, updateAuthState } = useAuthContext()
  const { data, mutateAsync, error, isLoading } = useSignInMutation()

  const validateEmail = (email: string) =>
    email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    setInputError(null)
    if (!validateEmail(signInInput.username)) {
      setInputError('This is not a valid email address.')
      return
    }
    await mutateAsync(signInInput)
  }

  useEffect(() => {
    if (data) {
      storage.setItem('signUpToken', data)
      updateAuthState({ ...authState, username: signInInput.username })
      navigate.push('/confirm-sign-in')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const disabled = !signInInput.username || isLoading

  return {
    disabled,
    error,
    isLoading,

    handleSignIn,
    setSignInInput,
    inputError,
    setInputError,
  }
}
