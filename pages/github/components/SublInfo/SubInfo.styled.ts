import styled from "styled-components";

import { pxToRem } from "utils";
import { Typography } from "components";

export const GrayText = styled(Typography)`
  color: ${(props) => props.theme.colors.brand.primary["15"]};
`;

export const Row = styled.div`
  @media (max-width: 1024px) {
    row-gap: ${pxToRem(16)};
  }
`;