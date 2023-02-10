import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'

import { ROUTES } from 'utils'
import logo from 'public/images/logo.svg'
import closeIcon from 'public/images/icon-close.svg'
import menuIcon from 'public/images/icon-menu.svg'

import { Modal, Typography } from 'components'

import { useNavBar } from './useNavBar'
import * as S from './NavBar.styled'

const NavBar: FC = () => {
  const { isMenuOpen, setIsMenuOpen, isAuthorized, handleLogOut } = useNavBar()

  return (
    <>
      <S.Container justifyContent="space-between" alignItems="center" direction="row">
        <S.Logo>
          <Link href="/">
            <Image src={logo} alt="PortId" />
          </Link>
        </S.Logo>

        {isAuthorized && (
          <>
            {isMenuOpen ? (
              <S.IconWrapper>
                <Image src={closeIcon} alt="Close menu" onClick={() => setIsMenuOpen(false)} aria-label="menu-close-icon" />
              </S.IconWrapper>
            ) : (
              <S.IconWrapper>
                <Image src={menuIcon} alt="Open menu" onClick={() => setIsMenuOpen(true)} aria-label="menu-open-icon" />
              </S.IconWrapper>
            )}
          </>
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
