import { FC, ReactNode } from 'react'

import { Box, Container, Header, Typography } from 'components'

import * as S from './ConfirmSignInForm.styled'

type ConfirmSignInFormProps = {
  error: Error | null;
  onSubmit(): void;
  inputs: ReactNode;
  isButtonDisabled: boolean;
  isLoading: boolean;
  handleResendCode(): void;
};

export const ConfirmSignInForm: FC<ConfirmSignInFormProps> = ({
  error,
  onSubmit,
  inputs,
  isButtonDisabled,
  handleResendCode,
  isLoading,
}) => {
  return (
    <>
      <Header title="Sign in" />

      <Container>
        <div className="grid lg:grid-cols-3 lg:gap-16">
          <S.Wrapper className="lg:col-start-2">
            <S.Prompt variant="p1">
              Please enter the verification code you received in your email.
            </S.Prompt>
            <form id="confirmation" onSubmit={onSubmit}>
              <Box gap={4}>
                <Typography variant="p4">Verification code</Typography>

                <S.VerificationFieldContainer direction="row" gap={30}>
                  {inputs}
                </S.VerificationFieldContainer>
              </Box>

              {error && <Typography variant="e1">{error?.message}</Typography>}
            </form>

            <S.SignInButton
              form="confirmation"
              type="submit"
              disabled={isButtonDisabled}
              loading={isLoading}
              fullWidth
            >
              Sign in
            </S.SignInButton>

            <Typography variant="p1">
              Didn’t receive a code? Click{' '}
              <Typography
                variant="l1"
                onClick={handleResendCode}
                role="button"
                tabIndex={0}
              >
                here
              </Typography>{' '}
              to send it again
            </Typography>
          </S.Wrapper>
        </div>
      </Container>
    </>
  )
}
