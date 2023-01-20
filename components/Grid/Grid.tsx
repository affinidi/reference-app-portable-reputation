import React, { FC } from 'react'

import { GridProps } from './types'
import * as S from './Grid.styled'

const Grid: FC<GridProps> = ({
  children,
  columnsWidth = [1],
  columnsGap = 32,
  rows = 1,
  rowsGap = 0,
  placeContent = 'normal'
}) => (
  <S.Grid
    columnsWidth={columnsWidth}
    columnsGap={columnsGap}
    $rows={rows}
    rowsGap={rowsGap}
    placeContent={placeContent}
  >
    {children}
  </S.Grid>
)

export default Grid
