import styled from "styled-components";
import { pxToRem } from "utils";

import { Typography, Box } from "../../../components";

export const Prompt = styled(Typography)`
  margin-top: ${pxToRem(40)};
`;

export const CenterDiv = styled(Box)`
  max-width: ${pxToRem(392)};
  margin: auto;
`;
