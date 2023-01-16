import { useCallback, useState } from 'react'

import { useAuthContext } from '../../hooks/useAuthContext'
import { logout } from '../../hooks/useAuthentication'

export const useNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { authState, updateAuthState } = useAuthContext()

  const isAuthorized = true

  const handleLogOut = useCallback(async () => {
    await logout(authState)
    updateAuthState({
      authorized: false,
    })
    setIsMenuOpen(false)
    // todo: navigate to HOME or PROFILE SET-UP
  }, [authState, updateAuthState])

  return { isMenuOpen, handleLogOut, setIsMenuOpen, isAuthorized }
}
