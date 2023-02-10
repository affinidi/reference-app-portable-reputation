import { FC } from 'react'

import { GithubProfileCredentialSubject } from 'types/github'
import { Card, Typography } from 'components'

import * as S from './SubInfo.styled'

type SubInfoProps = {
  info: GithubProfileCredentialSubject;
};

export const SubInfo: FC<SubInfoProps> = ({ info }) => (
  <div className="grid grid-cols-12 lg:gap-16 gap-12">
    <div className="lg:col-span-2 col-span-6">
      <Card>
        <S.GrayText variant="p2">Commits</S.GrayText>

        <Typography variant="h5" tag="div">
          {info.commits.total}
        </Typography>
      </Card>
    </div>

    <div className="lg:col-span-2 col-span-6">
      <Card>
        <S.GrayText variant="p2">Solved issues</S.GrayText>

        <Typography variant="h5" tag="div">
          {info.solvedIssues}
        </Typography>
      </Card>
    </div>

    <div className="lg:col-span-2 col-span-6">
      <Card>
        <S.GrayText variant="p2">Own repos</S.GrayText>

        <Typography variant="h5" tag="div">
          {info.ownedRepositoriesList.count}
        </Typography>
      </Card>
    </div>

    <div className="lg:col-span-2 col-span-6">
      <Card>
        <S.GrayText variant="p2">Starred repos</S.GrayText>

        <Typography variant="h5" tag="div">
          {info.starredRepositories}
        </Typography>
      </Card>
    </div>

    <div className="lg:col-span-2 col-span-6">
      <Card>
        <S.GrayText variant="p2">Watched repos</S.GrayText>

        <Typography variant="h5" tag="div">
          {info.watchedRepositories}
        </Typography>
      </Card>
    </div>

    <div className="lg:col-span-2 col-span-6">
      <Card>
        <S.GrayText variant="p2">Following</S.GrayText>

        <Typography variant="h5" tag="div">
          {info.following}
        </Typography>
      </Card>
    </div>

    <div className="lg:col-span-2 col-span-6">
      <Card>
        <S.GrayText variant="p2">Followers</S.GrayText>

        <Typography variant="h5" tag="div">
          {info.followers}
        </Typography>
      </Card>
    </div>
  </div>
)
