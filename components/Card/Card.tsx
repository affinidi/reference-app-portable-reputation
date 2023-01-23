import { FC } from "react";

import { BoxProps } from "../Box/Box";

import * as S from "./Card.styed";

export type CardProps = {
  size?: "default" | "small";
} & BoxProps;

export const Card: FC<CardProps> = ({
  children,
  size = "default",
  ...rest
}) => (
  <S.Card $size={size} {...rest}>
    {children}
  </S.Card>
);
