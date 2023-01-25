import { Box } from "components";
import { theme } from "components/utils/theme";
import styled from "styled-components";
import { pxToRem } from "utils";

export const NotYou = styled(Box)`
  margin-top: ${pxToRem(16)};
`;

export const DotContainer = styled(Box)`
  margin-left: ${pxToRem(24)};
  margin-right: ${pxToRem(24)};
`;

export const DotOne = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-grow: 0;
  margin: 0 4px 0 0;
  background: ${theme.colors.neutral.primary[70]};
`;
export const DotTwo = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-grow: 0;
  margin: 0 4px 0 0;
  background: ${theme.colors.neutral.primary[30]};
`;
export const DotThree = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-grow: 0;
  margin: 0 4px 0 0;
  background: ${theme.colors.neutral.primary[15]};
`;
