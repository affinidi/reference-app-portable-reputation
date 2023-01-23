import { Box, Typography } from "components";
import { theme } from "components/utils/theme";
import styled from "styled-components";
import { pxToRem } from "utils";

export const Main = styled(Box)`
  background-color: ${theme.colors.brand.primary[100]};
  min-height: 100vh;
`;

export const ButtonContainer = styled(Box)`
  width: ${pxToRem(286)};

  @media (max-width: ${pxToRem(392)}) {
    width: ${pxToRem(342)};
  }
`;

export const ServiceSelect = styled(Typography)`
  padding-top: ${pxToRem(40)};
  padding-bottom: ${pxToRem(40)};
  margin-bottom: 0;
`;
