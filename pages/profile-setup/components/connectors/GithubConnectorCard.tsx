import { FC } from 'react'
import Image from 'next/image'

import { Box, Typography } from 'components'
import githubIcon from 'public/images/icon-github.svg'

import * as S from './ConnectorCard.styled'
import { DownloadIcon } from 'assets'

interface Props {
  isConnected: boolean
  handleConnect: () => void
  className?: string
}

const GithubConnectorCard: FC<Props> = ({ className, isConnected, handleConnect }) => (
  <S.CardWrapper className={className} onClick={handleConnect}>
    <S.CardHeader direction="row" alignItems="center" justifyContent="space-between">
      <Box direction="row" alignItems="center" gap={16}>
        <S.CardIcon>
          <Image src={githubIcon} alt="GitHub" />
        </S.CardIcon>
        <Typography variant="h6">Github</Typography>
      </Box>

      <S.Download isConnected={isConnected}>
        <DownloadIcon />
      </S.Download>
    </S.CardHeader>
    <Typography variant="p1">
      Harnessed for productivity. Designed for collaboration. Celebrated for
      built-in security.
    </Typography>
  </S.CardWrapper>
)

export default GithubConnectorCard
