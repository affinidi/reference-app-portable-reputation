import styled from "styled-components";

import { pxToRem } from "utils";

export const Container = styled.div`
  padding: 0 ${pxToRem(24)};

  @media (min-width: ${pxToRem(500)}) {
    padding: 0 ${pxToRem(100)};
  }
`;

export const Title = styled.div`
  padding: ${pxToRem(40)} ${pxToRem(24)} 0;
`;
