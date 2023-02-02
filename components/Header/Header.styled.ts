import styled from 'styled-components'

import { pxToRem } from 'utils'

import Box from '../Box/Box'
import Typography from '../Typography/Typography'

export const Container = styled(Box)`
  background: #262c47;
  position: relative;
  height: ${pxToRem(144)};
`

export const Title = styled(Typography)`
  padding-bottom: ${pxToRem(20)};
`
