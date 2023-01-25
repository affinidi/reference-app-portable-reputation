import Link from "next/link";
import { FC } from "react";

import { ROUTES } from "utils";

import Typography from "../Typography/Typography";

import { useNavBar } from "./useNavBar";
import * as S from "./NavBar.styled";

const NavBar: FC = () => {
  const { isMenuOpen, setIsMenuOpen, handleLogOut, isAuthorized } = useNavBar();

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
        </S.MenuContainer>
      )}
    </>
  );
};

export default NavBar;
