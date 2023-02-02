import Link from 'next/link'
import { FC } from 'react'

import { ROUTES } from 'utils'
import { LogoMainIcon, MenuIcon } from 'components/icons'

import Modal from '../Modal/Modal'
import Typography from '../Typography/Typography'

import { useNavBar } from './useNavBar'
import * as S from './NavBar.styled'

const NavBar: FC = () => {
  const { isMenuOpen, setIsMenuOpen, isAuthorized, handleLogOut } = useNavBar()

  return (
    <>
      <S.Container>
        <S.Logo>
          <LogoMainIcon />
        </S.Logo>

        {isAuthorized && (
          <S.IconWrapper>
            <MenuIcon onClick={() => setIsMenuOpen(true)} />
          </S.IconWrapper>
        )}
      </S.Container>

      {isAuthorized && (
        <Modal
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          position="rightSide"
        >
          <S.Content alignItems="flex-end">
            <S.ButtonContainer>
              <Link
                href={ROUTES.profileSetup}
                onClick={() => setIsMenuOpen(false)}
              >
                <Typography variant="b1">Home</Typography>
              </Link>
            </S.ButtonContainer>

            <S.ButtonContainer onClick={handleLogOut}>
              <Typography variant="b1">Log out</Typography>
            </S.ButtonContainer>
          </S.Content>
        </Modal>
      )}
    </>
  )
}

export default NavBar
