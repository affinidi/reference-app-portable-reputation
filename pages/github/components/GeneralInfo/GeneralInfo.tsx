import { FC } from "react";
import Image from "next/image";

import { GithubProfileCredentialSubject } from "types/github";
import { Box, MapOutlinedIcon, OfficeIcon, Typography } from "components";

import * as S from "./GeneralInfo.styled";

type GeneralInfoProps = {
  info: GithubProfileCredentialSubject;
};

export const GeneralInfo: FC<GeneralInfoProps> = ({ info }) => (
  <div className="container">
    <S.Row className="row">
      <div className="col-12 col-sm-4">
        <S.UserInfoContainer direction="row" gap={40}>
          <Image
            src={info.profilePictureUrl || ""}
            alt={info.username || ""}
            width={72}
            height={72}
          />

          <Box justifyContent="space-between">
            <Typography variant="h7">{info.username}</Typography>

            {info.company && (
              <Box direction="row" gap={8}>
                <OfficeIcon />
                <S.GrayText variant="p2">{info.company}</S.GrayText>
              </Box>
            )}

            {info.location && (
              <Box direction="row" gap={8}>
                <MapOutlinedIcon />
                <S.GrayText variant="p2">{info.location}</S.GrayText>
              </Box>
            )}
          </Box>
        </S.UserInfoContainer>
      </div>

      <div className="col-6 col-sm">
        <S.Card gap={8}>
          <S.GrayText variant="p2">Pull requests total</S.GrayText>

          <Typography variant="h3" tag="div">
            {info.pullRequests}
          </Typography>
        </S.Card>
      </div>

      <div className="col-6 col-sm">
        <S.Card gap={8}>
          <S.GrayText variant="p2">Contributions last year</S.GrayText>

          <Typography variant="h3" tag="div">
            {info.contributions.lastYear}
          </Typography>
        </S.Card>
      </div>

      <div className="col-6 col-sm">
        <S.Card gap={8}>
          <S.GrayText variant="p2">Commits last week</S.GrayText>

          <Typography variant="h3" tag="div">
            {info.commits.lastWeek}
          </Typography>
        </S.Card>
      </div>

      <div className="col-6 col-sm">
        <S.Card gap={8}>
          <S.GrayText variant="p2">Commits last year</S.GrayText>

          <Typography variant="h3" tag="div">
            {info.commits.lastYear}
          </Typography>
        </S.Card>
      </div>
    </S.Row>
  </div>
);
