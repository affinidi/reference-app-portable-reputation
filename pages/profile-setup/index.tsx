import { FC } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

import { ROUTES } from 'utils'
import useVcProfiles from 'hooks/useVcProfiles'
import { Container, Header, Spinner } from 'components'

import GithubConnectorCard from './components/connectors/GithubConnectorCard'
import * as S from './ProfileSetup.styled'

const ProfileSetup: FC = () => {
  const { push } = useRouter()
  const vcs = useVcProfiles()

  const connectToGithub = async () => {
    if (!vcs?.github) {
      await signIn('github', { callbackUrl: ROUTES.githubCallback })
    } else {
      push(ROUTES.github)
    }
  }

  return (
    <>
      <Header title="Setup your profile" />

      <Container>
        {!vcs ? (
          <Spinner />
        ) : (
          <>
            <S.ServiceSelect variant="p1">
              Please select the service that you would like to connect
            </S.ServiceSelect>

            <S.CardRow className="grid lg:grid-cols-3 lg:gap-16">
              <GithubConnectorCard
                isConnected={Boolean(vcs?.github)}
                handleConnect={connectToGithub}
              />
            </S.CardRow>
          </>
        )}
      </Container>
    </>
  )
}

export default ProfileSetup
