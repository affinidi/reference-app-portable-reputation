import { FC } from "react";

import { GithubIcon } from "components/icons";

import ConnectorCard from "./ConnectorCard";

import styles from "./ConnectorCard.module.scss";

const GithubConnectorCard: FC = () => {
  return (
    <ConnectorCard>
      <div className={styles.card__header}>
        <GithubIcon className={styles.card__header__icon} />
        <div className={styles.card__header__name}>Github</div>
      </div>
      <div className={styles.card__description}>
        This area is linked to another screen. To quickly view links and
        navigate to linked screens, hold down Shift.
      </div>
    </ConnectorCard>
  );
};

export default GithubConnectorCard;
