import { FC } from "react";
import RoundButton from "../components/buttons/RoundButton";

import GithubConnectorCard from "../components/connectors/GithubConnectorCard";
import { FullLogoIcon } from "../components/icons";

import styles from "../styles/ProfileSetup.module.scss";

const ProfileSetup: FC = () => {
  const connectToGithub = () => {
    alert("to be implemented");
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
        <RoundButton
          handleClick={connectToGithub}
          text="Connect to my profile"
        />
      </div>
    </main>
  );
};

export default ProfileSetup;
