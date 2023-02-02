import styled from 'styled-components'

import Box from '../Box/Box'
import { pxToRem } from 'utils'

export const Card = styled(Box)<{ $size: 'default' | 'small' }>`
  padding: ${(props) =>
    props.$size === 'default'
      ? `${pxToRem(16)} ${pxToRem(24)}`
      : `${pxToRem(12)} ${pxToRem(24)}`};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.brand.primary[90]};
`
