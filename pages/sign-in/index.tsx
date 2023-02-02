import { FC } from 'react'

import { SignInForm } from './SignInForm'

import { useSignIn } from './useSignIn'

const SignIn: FC = () => {
  const {
    handleSignIn,
    setUsername,
    disabled,
    error,
    isLoading,
    inputError,
    setInputError,
  } = useSignIn()

  return (
    <SignInForm
      handleSignIn={handleSignIn}
      setUsername={setUsername}
      disabled={disabled}
      isLoading={isLoading}
      error={error}
      inputError={inputError}
      setInputError={setInputError}
    />
  )
}

export default SignIn
