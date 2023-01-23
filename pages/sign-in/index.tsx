import { FC } from 'react'

import { SignInForm } from './SignInForm'

import { useSignIn } from './useSignIn'

const SignIn: FC = () => {
  const { handleSignIn, setSignInInput, disabled, error, isLoading, inputError, setInputError } =
    useSignIn()

  return (
    <SignInForm
      handleSignIn={handleSignIn}
      setSignInInput={setSignInInput}
      disabled={disabled}
      isLoading={isLoading}
      error={error}
      inputError={inputError}
      setInputError={setInputError}
    />
  )
}

export default SignIn
