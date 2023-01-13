import styled from 'styled-components'

import { Input, Typography } from '../../../components'
import { InputProps } from '../../../components/Input/Input'
import { pxToRem } from '../../../utils'

export const Prompt = styled(Typography)`
  margin-bottom: ${pxToRem(40)};
`

export const Message = styled(Typography)`
  span {
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    color: #6af6ff;
  }
`

export const Label = styled(Typography)<{ $error: boolean }>`
  ${(props) => (props.$error ? `color: #e73c5b` : null)};
`

export const VerificationFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: ${pxToRem(500)}) {
    gap: ${pxToRem(22)};
  }
`

export const VerificationField = styled(Input)<InputProps>`
  margin: ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(10)} 0;

  input {
    text-align: center;
    padding: ${pxToRem(10)};
    border-radius: ${pxToRem(8)};
    font-family: Montserrat;
    font-size: ${pxToRem(28)};
    font-weight: bold;
    line-height: 1.29;
    letter-spacing: ${pxToRem(0.2)};
    color: #464e66;
    background: #f8f8f9;
  }
`
