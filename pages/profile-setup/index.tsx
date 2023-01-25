import { GetServerSideProps } from "next";
import { FC, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

import { ROUTES } from "utils";
import { Button, Container, Header } from "components";

import GithubConnectorCard from "./components/connectors/GithubConnectorCard";
import * as S from "./ProfileSetup.styled";

type ProfileSetupProps = {
  providers: ReturnType<typeof getProviders>;
};

const ProfileSetup: FC<ProfileSetupProps> = ({ providers }) => {
  const connectToGithub = async (id: string) => {
    await signIn(id, { callbackUrl: ROUTES.github });
  };

  const [isConnectorChecked, setIsConnectorChecked] = useState(false);

  return (
    <>
      <Header title="Setup your profile" />

      <Container>
        <S.ServiceSelect variant="p1">
          Please select the service that you would like to connect
        </S.ServiceSelect>

        <div className="row">
          <div className="col-12 col-sm-4">
            <GithubConnectorCard
              isChecked={isConnectorChecked}
              setIsChecked={setIsConnectorChecked}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-3">
            {!!providers &&
              Object.values(providers).map((provider) => {
                return (
                  <Button
                    key={provider.id}
                    disabled={!isConnectorChecked}
                    onClick={() =>
                      !isConnectorChecked
                        ? undefined
                        : connectToGithub(provider.id)
                    }
                  >
                    Connect to my profile
                  </Button>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfileSetup;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
