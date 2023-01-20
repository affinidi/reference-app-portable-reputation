import { GetServerSideProps } from "next";
import { FC, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

import RoundButton from "components/buttons/RoundButton";
import { Container, Grid, Header } from "components";

import GithubConnectorCard from "./components/connectors/GithubConnectorCard";
import * as S from "./ProfileSetup.styled";

type ProfileSetupProps = {
  providers: ReturnType<typeof getProviders>;
};

const ProfileSetup: FC<ProfileSetupProps> = ({ providers }) => {
  const connectToGithub = async (id: string) => {
    await signIn(id, { callbackUrl: "/github" });
  };

  const [isConnectorChecked, setIsConnectorChecked] = useState(false);

  return (
    <>
      <Header title="Setup your profile" />

      <Container>
        <S.Main direction="column">
          <S.MainContent>
            <S.ServiceSelect variant="p1">
              Please select the service that you would like to connect
            </S.ServiceSelect>
          </S.MainContent>

          <Grid columnsWidth={[4, 4, 4]}>
            <GithubConnectorCard
              isChecked={isConnectorChecked}
              setIsChecked={setIsConnectorChecked}
            />
          </Grid>

          <S.Actions>
            {!!providers &&
              Object.values(providers).map((provider) => {
                return (
                  <RoundButton
                    key={provider.name}
                    isDisabled={!isConnectorChecked}
                    handleClick={() => connectToGithub(provider.id)}
                    text="Connect to my profile"
                  />
                );
              })}
          </S.Actions>
        </S.Main>
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
