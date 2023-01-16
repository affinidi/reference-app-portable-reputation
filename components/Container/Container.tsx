import { FC, HTMLAttributes, ReactNode } from 'react'
import { Typography } from '../../components'
import * as S from './Container.styled'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  fullWidth?: boolean
  fullWidthCenter?: boolean
  fullWidthLeft?: boolean
  isGrid?: boolean
  isHome?: boolean
  title?: string
}

const Container: FC<ContainerProps> = ({
  children,
  fullWidth,
  fullWidthCenter,
  fullWidthLeft,
  isGrid,
  isHome,
  title,
}) => {
  return (
    <>
      {title && (
        <S.Title>
          <Typography variant="p1">{title}</Typography>
        </S.Title>
      )}
      <S.Frame
        $fullWidth={fullWidth}
        $fullWidthCenter={fullWidthCenter}
        $fullWidthLeft={fullWidthLeft}
        $isHome={isHome}
        $isGrid={isGrid}
      >
        {children}
      </S.Frame>
    </>
  )
}

export default Container
