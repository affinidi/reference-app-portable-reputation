import { FC } from 'react'

import { Typography } from '../index'

import { useNavBar } from './useNavBar'

import * as S from './NavBar.styled'

const NavBar: FC = () => {
  const { isMenuOpen, setIsMenuOpen, handleLogOut, isAuthorized } = useNavBar()

  return (
    <>
      <S.Container>
        <S.Logo src="/images/dApp-Logo-Wordmark.svg" aria-label="wallet-logo" />

        {isAuthorized && (
          <div>
            {isMenuOpen ? (
              <S.Icon
                aria-label="menu-close-icon"
                onClick={() => setIsMenuOpen(false)}
                src="/images/icon-close.svg"
              />
            ) : (
              <S.Icon
                aria-label="menu-open-icon"
                onClick={() => setIsMenuOpen(true)}
                src="/images/icon-menu.svg"
              />
            )}
          </div>
        )}
      </S.Container>
      {isAuthorized && isMenuOpen && (
        <S.MenuContainer $isOpen={isMenuOpen}>
          <S.ButtonContainer
            onClick={() => {
              setIsMenuOpen(false)
              // todo: navigate to HOME or PROFILE SET-UP
            }}
          >
            <Typography variant="h6">Home</Typography>
          </S.ButtonContainer>
          <S.ButtonContainer onClick={() => handleLogOut()}>
            <Typography variant="h6">Log out</Typography>
          </S.ButtonContainer>
        </S.MenuContainer>
      )}
    </>
  )
}

export default NavBar
