import { FC, useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

import { ROUTES } from 'utils'
import useVcProfiles from 'hooks/useVcProfiles'
import { Button, Container, Header, Spinner } from 'components'

import GithubConnectorCard from './components/connectors/GithubConnectorCard'
import * as S from './ProfileSetup.styled'

const ProfileSetup: FC = () => {
  const [isGithubConnectorChecked, setIsGithubConnectorChecked] =
    useState(false)

  const connectToGithub = async () => {
    await signIn('github', { callbackUrl: ROUTES.githubCallback })
  }

  const { push } = useRouter()
  const vcs = useVcProfiles()

  useEffect(() => {
    if (vcs?.github) {
      push(ROUTES.github)
    }
  }, [push, vcs])

  if (!vcs || vcs.github) {
    return <Spinner />
  }

  return (
    <>
      <Header title="Setup your profile" />

      <Container>
        <S.ServiceSelect variant="p1">
          Please select the service that you would like to connect
        </S.ServiceSelect>

        <S.CardRow className="grid lg:grid-cols-3 lg:gap-16">
          <GithubConnectorCard
            isChecked={isGithubConnectorChecked}
            setIsChecked={setIsGithubConnectorChecked}
          />
        </S.CardRow>

        <Button
          disabled={!isGithubConnectorChecked}
          onClick={connectToGithub}
        >
          Connect my Github profile
        </Button>
      </Container>
    </>
  )
}

export default ProfileSetup
