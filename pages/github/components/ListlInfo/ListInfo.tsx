import { FC } from "react";

import { GithubProfileCredentialSubject } from "types/github";
import { Box, Card } from "components";

import * as S from "./ListInfo.styled";

type ListInfoProps = {
  info: GithubProfileCredentialSubject;
};

export const ListInfo: FC<ListInfoProps> = ({ info }) => (
  <div className="container">
    <S.Row className="row">
      <div className="col-4 col-sm-12">
        <S.Title variant="h7">
          Top programming languages ({info.languagesList.count})
        </S.Title>

        <Box gap={8}>
          {info.languagesList.items.map(
            (item: { language: string; repositories: number }) => (
              <Card
<<<<<<< HEAD
                key={item.language}
=======
                size="small"
                key={item?.language}
>>>>>>> d956377 (feat: add mobile layout for github page)
                direction="row"
                justifyContent="space-between"
              >
                <S.GrayText variant="p1">{item.language}</S.GrayText>

                <S.GrayText variant="p1">
                  {item.repositories} projects
                </S.GrayText>
              </Card>
            )
          )}
        </Box>
      </div>

      <div className="col-4 col-sm-12">
        <S.Title variant="h7">
          User repositories ({info.ownedRepositoriesList.count})
        </S.Title>

        <Box gap={8}>
          {info.ownedRepositoriesList.items.map((item: { name: string }) => (
            <Card size="small" key={item.name}>
              <S.GrayText variant="p1">{item.name}</S.GrayText>
              <S.GrayText variant="p1">{item?.name}</S.GrayText>
            </Card>
          ))}
        </Box>
      </div>

      <div className="col-4 col-sm-12">
        <S.Title variant="h7">
          Organisations ({info.organizationsList.count})
        </S.Title>

        <Box gap={8}>
<<<<<<< HEAD
          {info.organizationsList.items.map((item: { name: string }) => (
            <Card key={item.name}>
              <S.GrayText variant="p1">{item.name}</S.GrayText>
=======
          {info?.organizationsList?.items.map((item: { name: string }) => (
            <Card size="small" key={item?.name}>
              <S.GrayText variant="p1">{item?.name}</S.GrayText>
>>>>>>> d956377 (feat: add mobile layout for github page)
            </Card>
          ))}
        </Box>
      </div>
    </S.Row>
  </div>
);
