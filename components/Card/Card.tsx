import { FC } from "react";

import { BoxProps } from "../Box/Box";

import * as S from "./Card.styed";

export type CardProps = {} & BoxProps;

export const Card: FC<CardProps> = ({ children, ...rest }) => (
  <S.Card {...rest}>{children}</S.Card>
);
