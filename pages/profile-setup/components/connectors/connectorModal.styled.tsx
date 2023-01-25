import { Box } from "components";
import styled from "styled-components";
import { pxToRem } from "utils";

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
  padding: ${pxToRem(32)} ${pxToRem(28)} ${pxToRem(56)} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.primary["15"]};
`;

export const AccessIconContainer = styled(Box)`
  p {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  svg {
    margin-right: ${pxToRem(8)};
  }
`;
