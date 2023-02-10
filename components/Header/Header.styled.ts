import styled from 'styled-components'

import { pxToRem } from 'utils'

import Box from '../Box/Box'
import Typography from '../Typography/Typography'

export const Container = styled(Box)`
  background: ${props => props.theme.colors.brand.primary['90']};
  height: ${pxToRem(144)};
`

export const Title = styled(Typography)`
  padding-bottom: ${pxToRem(20)};
`
