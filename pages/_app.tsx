import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { NavBar } from '../components'
import { AuthProvider } from '../contexts/AuthContext'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AuthProvider>
        <SessionProvider session={session}>
          <NavBar />
          <Component {...pageProps} />
        </SessionProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
