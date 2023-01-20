import { Typography, Box } from "components";
import styled from "styled-components";
import { pxToRem } from "utils";

export const Card = styled(Box)`
  gap: ${pxToRem(8)};
  padding: ${pxToRem(24)};
  border-radius: ${pxToRem(8)};
  box-shadow: 0 ${pxToRem(4)} ${pxToRem(20)} 0 rgba(49, 58, 85, 0.1);
  background-color: #262c47;

  @media (max-width: ${pxToRem(392)}) {
    width: ${pxToRem(342)};
  }
`;

export const Header = styled(Box)`
  gap: ${pxToRem(16)};
`;

export const Icon = styled(Box)`
  width: ${pxToRem(36.6)};
  height: ${pxToRem(36)};
`;

export const Name = styled(Typography)`
  flex-grow: 1;
  font-size: ${pxToRem(20)};
`;

export const Description = styled(Typography)`
  margin: ${pxToRem(16)} 0 0 0;
  font-size: ${pxToRem(16)};
`;

export const CheckboxContainer = styled(Box)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};

  input[type="checkbox"] {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    outline: ${pxToRem(4)} solid #c1c4cc;
    box-shadow: 0 0 0 ${pxToRem(20)} #262c47 inset;
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    accent-color: #6af6ff;
    outline: ${pxToRem(4)} solid #6af6ff;
    box-shadow: 0 0 0 ${pxToRem(2)} #6af6ff inset;
  }
`;
