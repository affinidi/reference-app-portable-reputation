import { FC, ReactNode } from "react";

import { Container, Header, Typography } from "components";

import * as S from "./ConfirmSignInForm.styled";

type ConfirmSignInFormProps = {
  error: Error | null;
  onSubmit(): void;
  inputs: ReactNode;
  isButtonDisabled: boolean;
  handleResendCode(): void;
};

export const ConfirmSignInForm: FC<ConfirmSignInFormProps> = ({
  error,
  onSubmit,
  inputs,
  isButtonDisabled,
  handleResendCode,
}) => {
  return (
    <>
      <Header title="Sign in" />

      <Container>
        <div className="row">
          <div className="col-12 col-sm-4 offset-sm-4">
            <S.Prompt variant="p1">
              Please enter the verification code you received in your email.
            </S.Prompt>
            <Typography variant={!!error ? "e1" : "p4"}>
              Verification code
            </Typography>
            <form id="confirmation" onSubmit={onSubmit}>
              <S.VerificationFieldContainer direction="row">
                {inputs}
              </S.VerificationFieldContainer>

              {error && <Typography variant="e1">{error?.message}</Typography>}
            </form>
            <S.SignInButton
              form="confirmation"
              type="submit"
              disabled={isButtonDisabled}
            >
              Sign in
            </S.SignInButton>

            <Typography variant="p1">
              Didn’t receive a code? Click{" "}
              <Typography
                variant="l1"
                onClick={handleResendCode}
                onKeyPress={handleResendCode}
                role="button"
                tabIndex={0}
              >
                here
              </Typography>{" "}
              to send it again
            </Typography>
          </div>
        </div>
      </Container>
    </>
  );
};
