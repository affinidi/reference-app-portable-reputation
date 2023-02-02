import React, { ElementType, FC, HTMLAttributes, ReactNode } from 'react'

import { AlignText, Variant } from './types'
import * as S from './Typography.styled'

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  children: ReactNode;
  variant?: Variant;
  align?: AlignText;
  ellipsis?: boolean;
  ellipsisLine?: number;
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
      case 'h2':
        return 'h2'
      case 'h3':
        return 'h3'
      case 'h4':
        return 'h4'
      case 'h5':
        return 'h5'
      case 'h6':
      case 'h7':
      case 'h8':
        return 'h6'
      case 'l1':
      case 'l2':
      case 'e1':
        return 'span'
      case 'p1':
      case 'p2':
      case 'p3':
      case 'p4':
      case 'p5':
      case 'p6':
      case 'p7':
      case 'p8':
        return 'p'

      default:
        return 'div'
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
