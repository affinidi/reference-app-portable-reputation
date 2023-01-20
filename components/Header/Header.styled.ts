import styled from 'styled-components'
import { pxToRem } from '../../utils'
import Typography from '../Typography/Typography'

export const Container = styled.div`
  background: #262c47;
  position: relative;
  height: ${pxToRem(164)};

  @media (min-width: ${pxToRem(500)}) {
    height: ${pxToRem(144)};
  }
`

export const Title = styled(Typography)`
  padding: ${pxToRem(84)} 0 ${pxToRem(24)};

  @media (min-width: ${pxToRem(500)}) {
    font-size: ${pxToRem(32)};
  }
`
