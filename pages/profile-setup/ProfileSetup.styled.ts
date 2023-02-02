import styled from 'styled-components'

import { pxToRem } from 'utils'
import { Typography } from 'components'

export const ServiceSelect = styled(Typography)`
  margin: ${pxToRem(40)} 0;
`

export const CardRow = styled.div`
  margin-bottom: ${pxToRem(56)};

  @media (max-width: 1024px) {
    margin-bottom: ${pxToRem(40)};
  }
`
