import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'

import { ROUTES } from 'utils'
import useVcProfiles from 'hooks/useVcProfiles'
import { Container, Header, Spinner } from 'components'
import { useAuthContext } from 'hooks/useAuthContext'
import { ErrorCodes } from 'utils/errorCodes'
import { showErrorToast } from 'utils/errorToast'

import GithubConnectorCard from './components/connectors/GithubConnectorCard'
import * as S from './ProfileSetup.styled'


const ProfileSetup: FC = () => {
  const { push } = useRouter()
  const { data, error, isLoading } = useVcProfiles()
  const { setAuthState } = useAuthContext()

  const connectToGithub = async () => {
    if (!data?.vcs?.github) {
      await data?.importGithubProfile()
    } else {
      push(ROUTES.github)
    }
  }

  useEffect(() => {
    if (error) {
      if (error?.response?.data?.error?.code === ErrorCodes.JWT_EXPIRED_ERROR) {
        setAuthState((prevState) => ({
          ...prevState,
          authorized: false,
        }))
        push(ROUTES.singIn)
      } else {
        showErrorToast(error)
      }
    }
  }, [error, push, setAuthState])

  return (
    <>
      <Header title='Setup your profile' />

      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <S.ServiceSelect variant='p1'>
              Please select the service that you would like to connect
            </S.ServiceSelect>

            <S.CardRow className='grid lg:grid-cols-3 lg:gap-16'>
              <GithubConnectorCard
                isConnected={Boolean(data?.vcs?.github)}
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
