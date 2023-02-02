import { FC } from 'react'

import { ConfirmSignInForm } from './ConfirmSignInForm/ConfirmSignInForm'

import { useConfirmSignIn } from './useConfirmSignIn'

const ConfirmSignIn: FC = () => {
  const {
    error,
    onSubmit,
    inputs,
    isButtonDisabled,
    handleResendCode,
    isLoading,
  } = useConfirmSignIn()

  return (
    <ConfirmSignInForm
      error={error}
      onSubmit={onSubmit}
      inputs={inputs}
      isButtonDisabled={isButtonDisabled}
      handleResendCode={handleResendCode}
      isLoading={isLoading}
    />
  )
}
export default ConfirmSignIn
