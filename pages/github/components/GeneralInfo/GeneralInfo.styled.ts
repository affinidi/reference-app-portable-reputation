import styled from 'styled-components'

import { pxToRem } from 'utils'
import { Box, Typography } from 'components'

export const UserInfoContainer = styled(Box)`
  @media (min-width: 1024px) {
    padding: 0 ${pxToRem(24)};
  }

  @media (max-width: 1024px) {
    margin-bottom: ${pxToRem(32)};
    gap: ${pxToRem(24)};
  }

  img {
    border-radius: 50%;
  }
`

export const Card = styled(Box)`
  padding: 0 ${pxToRem(24)};
`

export const GrayText = styled(Typography)`
  color: ${(props) => props.theme.colors.brand.primary['15']};
`
