import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";

import { logout } from "hooks/useAuthentication";
import { useAuthContext } from "hooks/useAuthContext";
import { useSessionStorage } from "hooks/useSessionStorage";

export const useNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status } = useSession();
  const { authState, setAuthState } = useAuthContext();
  const { clear } = useSessionStorage();

  const handleLogOut = useCallback(async () => {
    await logout();

    // NOTE: session storage do not cleared with cloudWalletService.logOut
    clear();

    setIsMenuOpen(false);

    setAuthState({ username: "", loading: false, authorized: false });
  }, [setIsMenuOpen, logout, clear, setAuthState]);

  return {
    isMenuOpen,
    handleLogOut,
    setIsMenuOpen,
    isAuthorized: status === "authenticated" || authState.authorized,
  };
};
