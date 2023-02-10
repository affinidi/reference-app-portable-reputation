import styled from 'styled-components'

import { pxToRem } from 'utils'
import { Typography } from 'components'

export const Title = styled(Typography)`
  margin-bottom: ${pxToRem(16)};
`

export const GrayText = styled(Typography)`
  color: ${(props) => props.theme.colors.brand.primary['15']};
`
