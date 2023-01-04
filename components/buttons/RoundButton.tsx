import { FC } from "react";

import styles from "./RoundButton.module.scss";

type RoundButtonProps = {
  handleClick: () => void;
  text?: string;
};

const RoundButton: FC<RoundButtonProps> = ({ handleClick, text = "" }) => {
  return (
    <div onClick={handleClick} className={styles.button}>
      {text}
    </div>
  );
};

export default RoundButton;
