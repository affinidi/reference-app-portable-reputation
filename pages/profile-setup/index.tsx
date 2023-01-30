import { FC, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { Button, Container, Header, Spinner } from "components";
import GithubConnectorCard from "./components/connectors/GithubConnectorCard";

import { ROUTES } from "utils";

import * as S from "./ProfileSetup.styled";
import useVcProfiles from "hooks/useVcProfiles";

const ProfileSetup: FC = () => {
  const [isGithubConnectorChecked, setIsGithubConnectorChecked] =
    useState(false);

  const connectToGithub = async () => {
    await signIn('github', { callbackUrl: ROUTES.github });
  };

  const { push } = useRouter();
  const vcs = useVcProfiles();

  useEffect(() => {
    if (vcs?.github) {
      push(ROUTES.github);
    }
  }, [push, vcs]);

  if (!vcs) {
    return <Spinner />;
  }

  return (
    <>
      <Header title="Setup your profile" />

      <Container>
        <S.ServiceSelect variant="p1">
          Please select the service that you would like to connect
        </S.ServiceSelect>

        <S.CardRow className="row">
          <div className="col-12 col-sm-4">
            <GithubConnectorCard
              isChecked={isGithubConnectorChecked}
              setIsChecked={setIsGithubConnectorChecked}
            />
          </div>
        </S.CardRow>

        <div className="row">
          <div className="col-12 col-sm-3">
              <Button
                disabled={!isGithubConnectorChecked}
                onClick={connectToGithub}
              >
                Connect to my profile
              </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfileSetup;
