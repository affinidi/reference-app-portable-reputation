import { Box } from "components";
import React, { FC, PropsWithChildren } from "react";

import * as S from "./ConnectorCard.styled";

type ConnectorCardProps = {};

const ConnectorCard: FC<PropsWithChildren<ConnectorCardProps>> = ({
  children,
}) => {
  return <Box>{children}</Box>;
};

export default ConnectorCard;
