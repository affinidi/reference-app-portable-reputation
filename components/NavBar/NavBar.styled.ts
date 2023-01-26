import styled from "styled-components";

import { pxToRem } from "utils";

import Box from "../Box/Box";

export const Container = styled.div`
  background: #0e1533;
  padding: ${pxToRem(20)} ${pxToRem(24)};
  height: ${pxToRem(64)};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  @media (min-width: ${pxToRem(500)}) {
    padding: ${pxToRem(22)} ${pxToRem(100)};
    height: ${pxToRem(72)};
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: ${pxToRem(24)};

  * {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  svg {
    width: ${pxToRem(100)};
    height: ${pxToRem(24)};
  }

  @media (max-width: ${pxToRem(1024)}) {
    svg {
      width: ${pxToRem(139)};
      height: ${pxToRem(32)};
    }
  }
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const Content = styled(Box)`
  padding: ${pxToRem(100)};

  @media (max-width: 1024px) {
    padding: ${pxToRem(76)} ${pxToRem(24)} ${pxToRem(24)};
  }
`;
