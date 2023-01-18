import styled from 'styled-components'

import { pxToRem } from 'utils'

import { GridProps } from './types'

type Props = {
  $rows: number
} & Omit<GridProps, 'rows'>

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ columnsWidth }) => columnsWidth!.map(col => `${(1 / 12) * col}fr`).join(' ')};
  grid-template-rows: ${({ $rows }) => `repeat(${$rows}, 1fr)`};
  grid-column-gap: ${({ columnsGap }) => pxToRem(columnsGap!)};
  grid-row-gap: ${({ rowsGap }) => pxToRem(rowsGap!)};
  place-content: ${({ placeContent }) => placeContent};
`
