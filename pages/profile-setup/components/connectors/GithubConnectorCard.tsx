import { FC } from 'react'
import Image from 'next/image'

import { Card, Typography } from 'components'
import githubIcon from 'public/images/icon-github.svg'

import * as S from './ConnectorCard.styled'

interface Props {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  className?: string
}

const GithubConnectorCard: FC<Props> = ({ isChecked, setIsChecked, className }) => (
  <Card className={className}>
    <S.CardHeader direction="row" alignItems="center">
      <S.CardIcon>
        <Image src={githubIcon} alt="GitHub" />
      </S.CardIcon>
      <Typography variant="h6">Github</Typography>
      <S.CardCheckboxContainer justifyContent="flex-end" direction="row">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </S.CardCheckboxContainer>
    </S.CardHeader>
    <Typography variant="p1">
      Harnessed for productivity. Designed for collaboration. Celebrated for
      built-in security.
    </Typography>
  </Card>
)

export default GithubConnectorCard
