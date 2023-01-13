import styled from 'styled-components'
import { Box } from '../../components'
import { pxToRem } from '../../utils'

export const Frame = styled(Box)<{
  $fullWidth?: boolean
  $fullWidthCenter?: boolean
  $fullWidthLeft?: boolean
  $isGrid?: boolean
  $isHome?: boolean
}>`
  padding: ${pxToRem(40)} ${pxToRem(24)};
  margin: 0;
  position: relative;
  // background: #0e1533;

  ${(props) =>
    props.$fullWidth
      ? `@media (min-width: ${pxToRem(500)}) {
    padding: ${pxToRem(40)} ${pxToRem(100)};
    max-width: none;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }`
      : null}

  ${(props) =>
    props.$fullWidthCenter
      ? `@media (min-width: ${pxToRem(500)}) {
        padding: ${pxToRem(40)} ${pxToRem(100)};
        width: ${pxToRem(600)};
        margin: 0 auto;
      }`
      : null}
    

  ${(props) =>
    props.$fullWidthLeft
      ? `@media (min-width: ${pxToRem(500)}) {
        padding: ${pxToRem(40)} ${pxToRem(100)};
        max-width: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }`
      : null}

  ${(props) =>
    props.$isGrid
      ? `@media (min-width: ${pxToRem(500)}) {
        padding: ${pxToRem(40)} ${pxToRem(100)};
        max-width: none;
            display: grid;
            grid-template-columns: repeat( 3, 1fr);
            grid-column-gap: ${pxToRem(40)};
            grid-row-gap: ${pxToRem(16)};
            width: 100%;
      }`
      : null}

      ${(props) =>
    props.$isHome
      ? `padding-top: 0;
      @media (min-width: ${pxToRem(500)}) {
            padding: 0 ${pxToRem(100)} ${pxToRem(40)};
            max-width: none;
            display: grid;
            grid-template-columns: repeat( 3, 1fr);
            grid-column-gap: ${pxToRem(40)};
            grid-row-gap: ${pxToRem(16)};
            width: 100%;
          }`
      : null}
`
export const Title = styled.div`
  padding: ${pxToRem(40)} ${pxToRem(24)} 0;
  @media (min-width: ${pxToRem(500)}) {
    padding: ${pxToRem(40)} ${pxToRem(100)} 0;
  }
`
