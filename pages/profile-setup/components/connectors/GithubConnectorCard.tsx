import { FC } from "react";

import { GithubIcon } from "components/icons";

import * as S from "./ConnectorCard.styled";
import { Card, Typography } from "components";

interface Props {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

const GithubConnectorCard: FC<Props> = ({ isChecked, setIsChecked }) => {
  return (
    <>
      <S.CardContainer>
        <Card>
          <S.CardHeader direction="row" alignItems="center">
            <S.CardIcon>
              <GithubIcon />
            </S.CardIcon>
            <Typography variant="h6">Github</Typography>
            <S.CardCheckboxContainer justifyContent="flex-end" direction="row">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
            </S.CardCheckboxContainer>
          </S.CardHeader>
          <Typography variant="p1">
            Harnessed for productivity. Designed for collaboration. Celebrated
            for built-in security.
          </Typography>
        </Card>
      </S.CardContainer>
    </>
  );
};

export default GithubConnectorCard;
