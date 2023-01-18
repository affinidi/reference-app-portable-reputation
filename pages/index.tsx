import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Container, Header, Typography, } from '../components'

const Home: FC<SignInProps> = ({ providers }) => {
  const { status } = useSession()
  const router = useRouter()

  React.useEffect(() => {
    if (status === 'authenticated') {
      router.push('/github')
    } else {
      router.push('/sign-in')
    }
  }, [])

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        ... Loading
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Developer Reputation App</title>
        <meta name="description" content="Generated by someone"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header title="Developer Reputation"/>
      <Container>
        <Typography variant="p1">Welcome to the start of your developer reputation.</Typography>
      </Container>
    </>
  )
}

export default Home

type SignInProps = {
  providers: [{ id: string; name: string }];
};
