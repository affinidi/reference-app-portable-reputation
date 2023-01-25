import styled from "styled-components";

import { pxToRem } from "utils";
import { Box, Typography } from "components";

export const Wrapper = styled.div`
  padding: ${pxToRem(40)} ${pxToRem(32)};
  background: ${({ theme }) => theme.colors.neutral.primary["100"]};

  @media (max-width: 1024px) {
    padding: ${pxToRem(40)} ${pxToRem(24)};
  }
`;

export const Logos = styled(Box)`
  margin-bottom: ${pxToRem(48)};

  svg {
    width: ${pxToRem(112)};
    height: ${pxToRem(112)};
  }
`;

export const NotYou = styled(Box)`
  margin-top: ${pxToRem(16)};
  margin-bottom: ${pxToRem(32)};
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.neutral.primary[70]};

  &:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.neutral.primary[30]};
  }

  &:nth-child(3) {
    background: ${({ theme }) => theme.colors.neutral.primary[15]};
  }
`;

export const AccessContainer = styled(Box)`
  width: 100%;
  padding: ${pxToRem(32)} 0 ${pxToRem(56)};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.primary["15"]};
`;

export const TextO1 = styled(Typography)`
  color: ${({ theme }) => theme.colors.neutral.primary["30"]};
`;
