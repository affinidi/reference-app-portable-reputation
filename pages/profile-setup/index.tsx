import { GetServerSideProps } from "next";
import { FC } from "react";
import { getProviders, signIn } from "next-auth/react";

import RoundButton from "components/buttons/RoundButton";
import { Container, Grid, Header } from "components";

import GithubConnectorCard from "./components/connectors/GithubConnectorCard";
import styles from "./ProfileSetup.module.scss";

type ProfileSetupProps = {
  providers: ReturnType<typeof getProviders>;
};

const ProfileSetup: FC<ProfileSetupProps> = ({ providers }) => {
  const connectToGithub = async (id: string) => {
    await signIn(id, { callbackUrl: "/github" });
  };

  return (
    <>
      <Header title="Setup your profile" />

      <Container>
        <main className={styles.main}>
          <div className={styles.main__content}>
            <h2>Please select the service that you would like to connect</h2>
          </div>

          <Grid columnsWidth={[4, 4, 4]}>
            <GithubConnectorCard />
          </Grid>

          <div className={styles.main__actions}>
            {!!providers &&
              Object.values(providers).map((provider) => {
                return (
                  <RoundButton
                    key={provider.name}
                    handleClick={() => connectToGithub(provider.id)}
                    text="Connect to my profile"
                  />
                );
              })}
          </div>
        </main>
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
