import { Box } from "components";
import { FC } from "react";

import * as S from "./RoundButton.styled";

type RoundButtonProps = {
  handleClick: () => void;
  text?: string;
  isDisabled: boolean;
};

const RoundButton: FC<RoundButtonProps> = ({
  handleClick,
  text = "",
  isDisabled = false,
}) => {
  return (
    <S.RoundButton
      disabled={isDisabled}
      onClick={isDisabled ? undefined : handleClick}
    >
      <Box justifyContent="center" alignItems="center">
        <S.ButtonText variant="b2">{text}</S.ButtonText>
      </Box>
    </S.RoundButton>
  );
};

export default RoundButton;
