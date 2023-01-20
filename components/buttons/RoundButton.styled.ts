import { Typography, Box, Button } from "components";
import styled from "styled-components";
import { pxToRem } from "utils";

export const RoundButton = styled(Button)`
  height: ${pxToRem(48)};
  width: ${pxToRem(286)};
  text-transform: uppercase;
  border-radius: ${pxToRem(48)};
  background-color: #6af6ff;
  cursor: pointer;

  &:disabled {
    background-color: #c1c4cc;
    color: #feffff;
    pointer-events: none;
  }

  @media (max-width: ${pxToRem(392)}) {
    width: ${pxToRem(342)};
  }
`;

export const ButtonText = styled(Typography)`
  font-size: ${pxToRem(16)};
  margin-bottom: 0;
  color: #313a55;
  font-weight: 600;
`;
