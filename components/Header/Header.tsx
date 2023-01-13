import { FC, SVGAttributes } from 'react'

import * as S from './Header.styled'

export type HeaderProps = {
  title: string
  icon?: SVGAttributes<SVGElement>
  path?: string
}

const Header: FC<HeaderProps> = ({ title, icon, path }) => {
  return (
    <S.Container>
      {/* <S.IconWrapper>{icon}</S.IconWrapper> */}
      <S.Title variant="h1">{title}</S.Title>
    </S.Container>
  )
}

export default Header

//  onClick={() => (path ? navigate(path) : icon ? navigate(-1) : null)}>
