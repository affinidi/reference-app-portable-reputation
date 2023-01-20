import { FC } from "react";

import { GithubIcon } from "components/icons";

import ConnectorCard from "./ConnectorCard";

import * as S from "./ConnectorCard.styled";

interface Props {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

const GithubConnectorCard: FC<Props> = ({ isChecked, setIsChecked }) => {
  return (
    <ConnectorCard>
      <S.Card
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <S.Header direction="row" alignItems="center">
          <S.Icon>
            <GithubIcon />
          </S.Icon>
          <S.Name variant="h6">Github</S.Name>
          <S.CheckboxContainer>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            ></input>
          </S.CheckboxContainer>
        </S.Header>
        <S.Description variant="p1">
          Harnessed for productivity. Designed for collaboration. Celebrated for
          built-in security.
        </S.Description>
      </S.Card>
    </ConnectorCard>
  );
};

export default GithubConnectorCard;
