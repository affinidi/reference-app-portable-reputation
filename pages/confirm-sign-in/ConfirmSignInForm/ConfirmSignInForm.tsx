import { FC, ReactNode } from "react";

import { Container, Header, Typography } from "../../../components";

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
        <S.CenterDiv>
          <S.Prompt variant="p1">
            Please enter the verification code you received in your email.
          </S.Prompt>
          <S.Label $error={!!error} variant="p4">
            Verification code
          </S.Label>
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

          <S.Message variant="p2">
            Didn’t receive a code? Click{" "}
            <span
              onClick={handleResendCode}
              onKeyPress={handleResendCode}
              role="button"
              tabIndex={0}
            >
              here
            </span>{" "}
            to send it again
          </S.Message>
        </S.CenterDiv>
      </Container>
    </>
  );
};
