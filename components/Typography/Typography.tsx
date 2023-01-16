import React, { FC, ReactNode, ElementType, HTMLAttributes } from 'react'

import { Variant, AlignText } from './types'
import * as S from './Typography.styled'

export interface TypographyProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  tag?: ElementType
  children: ReactNode
  variant?: Variant
  align?: AlignText
  ellipsis?: boolean
  ellipsisLine?: number
  title?: ReactNode
}

const Typography: FC<TypographyProps> = ({
  tag,
  children,
  variant = 'p1',
  align,
  ellipsis,
  ellipsisLine = 0,
  ...props
}) => {
  const getElementType = () => {
    if (tag) return tag

    switch (variant) {
      case 'h1':
        return 'h1'
      case 'h6':
      case 'h7':
        return 'h6'
      case 's3':
      case 's2':
      case 'c1':
        return 'div'
      case 'p2':
      case 'p3':
      case 'p4':
        return 'span'
      default:
        return 'p'
    }
  }

  return (
    <S.Typography
      {...props}
      $variant={variant}
      $align={align}
      $ellipsis={ellipsis}
      $ellipsisLines={ellipsisLine}
      as={getElementType()}
    >
      {children}
    </S.Typography>
  )
}

export default Typography
