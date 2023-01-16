import { createContext, FC, ReactNode } from 'react'

import { useAuthentication } from '../hooks/useAuthentication'

export const AuthContext = createContext({} as ReturnType<typeof useAuthentication>)
type Props = {
  children: ReactNode
}
export const AuthProvider: FC<Props> = ({ children }) => {
  const auth = useAuthentication()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
