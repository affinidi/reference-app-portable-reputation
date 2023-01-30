import { FC, useState } from "react";
import { signIn } from "next-auth/react";

import { Button, Container, Header } from "components";

import GithubConnectorCard from "./components/connectors/GithubConnectorCard";
import * as S from "./ProfileSetup.styled";
import { ROUTES } from '../../utils';

const ProfileSetup: FC = () => {
  const [isConnectorChecked, setIsConnectorChecked] = useState(false);

  const connectToGithub = async () => {
    await signIn('github', { callbackUrl: ROUTES.github });
  };

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
              isChecked={isConnectorChecked}
              setIsChecked={setIsConnectorChecked}
            />
          </div>
        </S.CardRow>

        <div className="row">
          <div className="col-12 col-sm-3">
              <Button
                disabled={!isConnectorChecked}
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
