import React, { ReactNode } from 'react'

export type GridProps = {
  columnsGap?: number
  columnsWidth?: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12)[]
  rows?: number
  rowsGap?: number
  placeContent?: React.CSSProperties['placeContent']
  children: ReactNode
}
