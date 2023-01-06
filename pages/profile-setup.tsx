import { GetServerSideProps } from "next";
import { FC } from "react";
import { getProviders, signIn } from "next-auth/react";

import RoundButton from "../components/buttons/RoundButton";
import GithubConnectorCard from "../components/connectors/GithubConnectorCard";
import { FullLogoIcon } from "../components/icons";

import styles from "../styles/ProfileSetup.module.scss";

type ProfileSetupProps = {
  providers: ReturnType<typeof getProviders>;
};

const ProfileSetup: FC<ProfileSetupProps> = ({ providers }) => {
  const connectToGithub = async (id: string) => {
    await signIn(id);
  };

  return (
    <main className={styles.main}>
      <div>
        <FullLogoIcon />
      </div>
      <div className={styles.main__title}>
        <h1>Setup your profile</h1>
      </div>
      <div className={styles.main__content}>
        <h2>Please select the service that you would like to connect</h2>
        <GithubConnectorCard />
      </div>
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
  );
};

export default ProfileSetup;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
