import { Dispatch, FC, FormEvent, SetStateAction } from "react";

import {
  Button,
  Container,
  ContainerForm,
  Header,
  Input,
  Spinner,
} from "../../../components";

import * as S from "./SigninForm.styled";

type SignInFormProps = {
  handleSignIn(e: FormEvent): void;
  setUsername(username: string): void
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputError(null);
    setUsername(event.target.value);
  };

  return (
    <>
      <Header title="Sign in" />
      <Container>
        <div className="col-12 col-sm-4 offset-sm-4">
          <ContainerForm onSubmit={handleSignIn}>
            <S.Prompt variant="p1">
              Please enter your email address to sign in.
            </S.Prompt>

            <Input
              autoComplete="off"
              id="username"
              label="Email address"
              placeholder="Enter your email address"
              onChange={handleChange}
              error={inputError || error?.message}
            />
            <Button disabled={disabled} type="submit">
              send verification code
            </Button>
            {isLoading && <Spinner />}
          </ContainerForm>
        </div>
      </Container>
    </>
  );
};
