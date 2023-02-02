import { FC, HTMLAttributes, ReactNode } from 'react'

import { Typography } from 'components'

import * as S from './Container.styled'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
}

const Container: FC<ContainerProps> = ({ children, title }) => {
  return (
    <>
      {title && (
        <S.Title>
          <Typography variant="p1">{title}</Typography>
        </S.Title>
      )}
      <S.Container>{children}</S.Container>
    </>
  )
}

export default Container
