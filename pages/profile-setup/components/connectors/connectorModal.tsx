import { getProviders, signIn } from "next-auth/react";

import { Box, Button, Modal, Typography } from "components";
import { ROUTES } from "utils";

import Dapp from "public/images/dapp";
import { GitHub, IconCheck } from "public/images";

import * as S from "../connectors/connectorModal.styled";
import { useAuthContext } from "hooks/useAuthContext";

export const ConnectorModal: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  providers: ReturnType<typeof getProviders>;
}> = ({ isOpen, setIsOpen, providers }) => {
  const { authState } = useAuthContext();
  const connectToGithub = async (id: string) => {
    await signIn(id, { callbackUrl: ROUTES.github });
  };

  return (
    <Modal
      icon={
        <>
          <Box gap={24} direction="row">
            <Dapp />
            <Box direction="row" alignItems="center" gap={4}>
              <S.Dot />
              <S.Dot />
              <S.Dot />
            </Box>
            <GitHub />
          </Box>
        </>
      }
      open={isOpen}
      footer={
        <>
          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <Button
                  key={provider.id}
                  onClick={() => connectToGithub(provider.id)}
                >
                  Connect
                </Button>
              );
            })}
        </>
      }
      onClose={() => setIsOpen(false)}
    >
      <>
        <Typography variant="p1">
          DApp wants to connect to your GitHub account. You are currently signed
          in as {authState.username}
        </Typography>
        <S.NotYou>
          <Typography variant="p1">
            Not you?<Typography variant="l1"> CLICK HERE</Typography>
          </Typography>
        </S.NotYou>

        <S.AccessContainer alignItems="flex-start" gap={17}>
          <Typography variant="o1">This will allow DApp to:</Typography>
          <S.AccessIconContainer>
            <Typography variant="p1">
              <IconCheck />
              Access your GitHub profile
            </Typography>
          </S.AccessIconContainer>
        </S.AccessContainer>
      </>
    </Modal>
  );
};
