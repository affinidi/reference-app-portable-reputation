import { Box, Typography } from "components";
import styled from "styled-components";
import { pxToRem } from "utils";

export const Main = styled(Box)`
  background-color: #0e1533;
  min-height: 100vh;
`;

export const MainContent = styled(Box)`
  padding-top: ${pxToRem(40)};
  padding-bottom: ${pxToRem(40)};
`;

export const Actions = styled(Box)`
  margin-top: ${pxToRem(56)};

  button {
    margin-top: 0;
  }
`;

export const ServiceSelect = styled(Typography)`
  font-size: ${pxToRem(16)};
  margin-bottom: 0;
`;
