import styled from "styled-components";

import { pxToRem } from "utils";
import { Box, Typography } from "components";

export const UserInfoContainer = styled(Box)`
  @media (min-width: 576px) {
    padding: 0 ${pxToRem(24)};
  }

  @media (max-width: 576px) {
    margin-bottom: ${pxToRem(32)};
    gap: ${pxToRem(24)};
  }

  img {
    border-radius: 50%;
  }
`;

export const Row = styled.div`
  @media (max-width: 576px) {
    row-gap: ${pxToRem(24)};
  }
`;

export const Card = styled(Box)`
  padding: 0 ${pxToRem(24)};
`;

export const GrayText = styled(Typography)`
  color: ${(props) => props.theme.colors.brand.primary["15"]};
`;
