import styled from 'styled-components'

import { pxToRem } from 'utils'
import { Box } from 'components'

export const Container = styled(Box)`
  padding: 0 ${pxToRem(24)};
  height: ${pxToRem(64)};

  @media (min-width: 1024px) {
    padding: 0 ${pxToRem(100)};
    height: ${pxToRem(72)};
  }
`

export const ButtonContainer = styled.div`
  margin-bottom: ${pxToRem(24)};

  * {
    cursor: pointer;
    text-decoration: none;
  }
`

export const Logo = styled.div`
  img {
    cursor: pointer;
    
    @media (max-width: 1024px) {
      width: ${pxToRem(80)};
    }
  }

`

export const IconWrapper = styled.div`
  cursor: pointer;
  
  img {
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};

    @media (max-width: 1024px) {
      width: ${pxToRem(24)};
      height: ${pxToRem(24)};
    }
  }
  
  
`

export const Content = styled(Box)`
  padding: ${pxToRem(100)};

  @media (max-width: 1024px) {
    padding: ${pxToRem(76)} ${pxToRem(24)} ${pxToRem(24)};
  }
`
