import styled, { keyframes } from 'styled-components'
import { pxToRem } from 'utils'

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div<{ $width: number; $height: number }>`
  width: ${({ $width }) => pxToRem($width)};
  height: ${({ $height }) => pxToRem($height)};
  animation: ${rotate} 1.5s linear infinite;
  border: 10px solid ${props => props.theme.colors.brand.primary['70']};
  border-radius: 50%;
  border-top: 10px solid ${props => props.theme.colors.brand.secondary['100']};
  margin: ${pxToRem(40)} auto;
`
