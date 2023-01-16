import React, { ButtonHTMLAttributes } from 'react'

import { Variant } from './types'
import * as S from './Button.styled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  icon?: React.ReactElement
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'default', icon, ...props }) => (
  <S.Button $variant={variant} $round={!!icon} {...props}>
    {icon}
    {children}
  </S.Button>
)

export default Button
