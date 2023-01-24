import styled from "styled-components";

import { Input, Typography, Button, Box, Container } from "../../../components";
import { InputProps } from "../../../components/Input/Input";
import { pxToRem } from "../../../utils";
import { theme } from "../../../components/utils/theme";

export const Prompt = styled(Typography)`
  margin: ${pxToRem(40)} 0;
`;

export const VerificationFieldContainer = styled(Box)`
  @media (min-width: 1024px) {
    gap: ${pxToRem(22)};
  }
`;

export const VerificationField = styled(Input)<InputProps>`
  margin: ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(10)} 0;

  input {
    text-align: center;
    padding: ${pxToRem(10)};
    border-radius: ${pxToRem(8)};
    font-family: Montserrat;
    font-size: ${pxToRem(28)};
    font-weight: bold;
    line-height: 1.29;
    letter-spacing: ${pxToRem(0.2)};
    color: #464e66;
    background: #f8f8f9;
  }
`;

export const SignInButton = styled(Button)`
  width: 100%;
`;

