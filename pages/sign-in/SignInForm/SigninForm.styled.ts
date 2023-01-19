import styled from "styled-components";
import { pxToRem } from "utils";

import { Typography } from "../../../components";

export const Prompt = styled(Typography)`
  margin-top: ${pxToRem(40)};
`;

export const CenterDiv = styled.div`
  max-width: ${pxToRem(392)};
  margin: auto;
`;
