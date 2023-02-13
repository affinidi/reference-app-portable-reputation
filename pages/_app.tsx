import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'

import { theme } from 'utils/theme'
import { AuthProvider } from 'contexts/AuthContext'
import { ToastsContainer } from 'components'

import '../styles/globals.css'

import AuthRedirect from './components/AuthRedirect/AuthRedirect'
import NavBar from './components/NavBar/NavBar'
import GithubErrorNotification from './components/GitHubNotification/GithubErrorNotification'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SessionProvider session={session}>
            <AuthRedirect>
              <NavBar />
              <Component {...pageProps} />
            </AuthRedirect>
          </SessionProvider>
        </AuthProvider>

        <GithubErrorNotification />
        <ToastsContainer />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
