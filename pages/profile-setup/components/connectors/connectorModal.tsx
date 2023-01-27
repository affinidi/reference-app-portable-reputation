import { getProviders, signIn } from "next-auth/react";

import {
  Box,
  Button,
  CheckIcon,
  GithubIcon,
  LogoIcon,
  Modal,
  Typography,
} from "components";
import { ROUTES } from "utils";

import * as S from "../connectors/connectorModal.styled";

export const ConnectorModal: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  const connectToGithub = async () => {
    await signIn("github", { callbackUrl: ROUTES.githubCallback });
  };

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)} showCloseIcon={false}>
      <S.Wrapper>
        <S.Logos gap={24} direction="row" justifyContent="center">
          <LogoIcon />
          <Box direction="row" alignItems="center" gap={4}>
            <S.Dot />
            <S.Dot />
            <S.Dot />
          </Box>
          <GithubIcon />
        </S.Logos>

        <Typography variant="p1">
          DApp wants to connect to your GitHub account.
        </Typography>
        <S.NotYou>
          <Typography variant="p1">
            Not you?<Typography variant="l1"> CLICK HERE</Typography>
          </Typography>
        </S.NotYou>

        <S.AccessContainer alignItems="flex-start" gap={17}>
          <S.TextO1 variant="o1">This will allow DApp to:</S.TextO1>

          <Box direction="row" alignItems="center" gap={8}>
            <CheckIcon />
            <Typography variant="p1">Access your GitHub profile</Typography>
          </Box>
        </S.AccessContainer>

        <Box direction="row" justifyContent="space-between">
          <Button onClick={() => setIsOpen(false)} variant="ghost">
            Cancel
          </Button>
          <Button onClick={connectToGithub}>Connect</Button>
        </Box>
      </S.Wrapper>
    </Modal>
  );
};
