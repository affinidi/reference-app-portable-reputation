import styled, { css } from 'styled-components'

import { pxToRem } from 'utils'
import { Box, Card } from 'components'

export const CardWrapper = styled(Card)`
  cursor: pointer;
  
  * {
    cursor: pointer;
  }
`

export const CardHeader = styled(Box)`
  margin-bottom: ${pxToRem(16)};
`

export const CardIcon = styled(Box)`
  img {
    width: ${pxToRem(36)};
    height: ${pxToRem(36)};
  }
`

export const Download = styled.div<{ isConnected: boolean }>`
  ${props => props.isConnected && css`
    path {
      fill: ${props.theme.colors.brand.secondary['100']};
    }
  `}
`
