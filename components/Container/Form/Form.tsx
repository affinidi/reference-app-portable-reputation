import { FC, FormHTMLAttributes, ReactNode } from 'react'

import * as S from './Form.styled'

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode
}

const Form: FC<FormProps> = ({ children, ...props }) => <S.Form {...props}>{children}</S.Form>

export default Form
