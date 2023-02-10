import styled from 'styled-components'

import { pxToRem } from 'utils'
import { Button, Typography } from 'components'

export const Prompt = styled(Typography)`
  margin: ${pxToRem(40)} 0;

  @media (max-width: 1024px) {
    margin: ${pxToRem(40)} 0 ${pxToRem(24)};
  }
`

export const ButtonWrapper = styled(Button)`
  margin-top: ${pxToRem(16)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
