import { Dispatch, FC, FormEvent, SetStateAction } from 'react'

import { Container, Header, Input } from 'components'

import * as S from './SigninForm.styled'

type SignInFormProps = {
  handleSignIn(e: FormEvent): void;
  setUsername(username: string): void;
  disabled: boolean;
  isLoading: boolean;
  error: Error | null;
  inputError: string | null;
  setInputError: Dispatch<SetStateAction<string | null>>;
};

export const SignInForm: FC<SignInFormProps> = ({
  handleSignIn,
  setUsername,
  disabled,
  error,
  inputError,
  setInputError,
  isLoading,
}) => {
  const handleChange = (value: string) => {
    if (inputError) {
      setInputError(null)
    }

    setUsername(value)
  }

  return (
    <>
      <Header title="Sign in" />

      <Container>
        <div className="grid lg:grid-cols-3 lg:gap-16">
          <S.Form className="lg:col-start-2" onSubmit={handleSignIn}>
            <S.Prompt variant="p1">
              Please enter your email address to sign in.
            </S.Prompt>

            <Input
              id="email"
              type="email"
              label="Email address"
              placeholder="Enter your email address"
              onChange={handleChange}
              hasError={Boolean(inputError || error?.message)}
              helpText={inputError || error?.message}
            />

            <S.ButtonWrapper
              disabled={disabled}
              type="submit"
              loading={isLoading}
              fullWidth
            >
              send verification code
            </S.ButtonWrapper>
          </S.Form>
        </div>
      </Container>
    </>
  )
}
