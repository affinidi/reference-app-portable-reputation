import React, { FC, PropsWithChildren } from "react";

import styles from "./ConnectorCard.module.scss";

type ConnectorCardProps = {};

const ConnectorCard: FC<PropsWithChildren<ConnectorCardProps>> = ({
  children,
}) => {
  return <div className={styles.card}>{children}</div>;
};

export default ConnectorCard;
