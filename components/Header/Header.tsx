import { FC, SVGAttributes } from 'react'

import * as S from './Header.styled'
import { Container } from 'components'

export type HeaderProps = {
  title: string
  icon?: SVGAttributes<SVGElement>
  path?: string
}

const Header: FC<HeaderProps> = ({ title, icon, path }) => (
  <S.Container>
    <Container>
      {/* <S.IconWrapper>{icon}</S.IconWrapper> */}
      <S.Title variant="h1">{title}</S.Title>
    </Container>
  </S.Container>
)

export default Header
