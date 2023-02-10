import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { Spinner } from 'components'

import { ROUTES } from 'utils'
import { useAuthContext } from 'hooks/useAuthContext'

type AuthRedirectProps = {
  children: React.ReactNode;
};

const AuthRedirect: FC<AuthRedirectProps> = ({ children }) => {
  const { status } = useSession()
  const { route, push } = useRouter()
  const { authState, authenticate } = useAuthContext()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    authenticate()
  }, [])

  useEffect(() => {
    (async () => {
      if (!authState.loading) {
        if (!authState.authorized && route !== ROUTES.singIn) {
          if (route !== ROUTES.confirmSingIn) {
            await push(ROUTES.singIn)
          }
        }

        if (
          authState.authorized &&
          (route === ROUTES.singIn || route === ROUTES.confirmSingIn)
        ) {
          await push(ROUTES.profileSetup)
        }

        setIsLoading(false)
      }
    })()
  }, [status, route, push, authState])

  if (isLoading) {
    return <Spinner />
  }

  return <>{children}</>
}

export default AuthRedirect
