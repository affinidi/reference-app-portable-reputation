import styled from 'styled-components'

import { pxToRem } from 'utils'
import { Box } from 'components'

export const CardHeader = styled(Box)`
  gap: ${pxToRem(16)};
  margin-bottom: ${pxToRem(16)};
`

export const CardIcon = styled(Box)`
  img {
    width: ${pxToRem(36)};
    height: ${pxToRem(36)};
  }
`

export const CardCheckboxContainer = styled(Box)`
  width: 100%;
  height: ${pxToRem(24)};

  input[type="checkbox"] {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    outline: ${pxToRem(4)} solid ${props => props.theme.colors.neutral.primary[30]};
    box-shadow: 0 0 0 ${pxToRem(20)} ${props => props.theme.colors.brand.primary[90]} inset;
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    accent-color: ${props => props.theme.colors.brand.secondary[100]};
    outline: ${pxToRem(4)} solid ${props => props.theme.colors.brand.secondary[100]};
    box-shadow: 0 0 0 ${pxToRem(2)} ${props => props.theme.colors.brand.secondary[100]} inset;
  }
`
