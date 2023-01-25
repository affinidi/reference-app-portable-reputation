import { Button, Modal, Typography } from "components";
import { getProviders, signIn } from "next-auth/react";
import { GitHub } from "public/images";
import Dapp from "public/images/dapp";
import { ROUTES } from "utils";

import * as S from "../connectors/connectorModal.styled";

export const ConnectorModal: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  providers: ReturnType<typeof getProviders>;
}> = ({ isOpen, setIsOpen, providers }) => {
  const connectToGithub = async (id: string) => {
    await signIn(id, { callbackUrl: ROUTES.github });
  };

  return (
    <>
      <Modal
        icon={
          <>
            <Dapp />
            <S.DotContainer direction="row" alignItems="center">
              <S.DotOne></S.DotOne>
              <S.DotTwo></S.DotTwo>
              <S.DotThree></S.DotThree>
            </S.DotContainer>
            <GitHub />
          </>
        }
        open={isOpen}
        access="Access your GitHub profile"
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
        <Typography variant="p1">
          DApp wants to connect to your GitHub account. You are currently signed
          in as max.sampimon.
        </Typography>
        <S.NotYou>
          <Typography variant="p1">
            Not you?<Typography variant="l1"> CLICK HERE</Typography>
          </Typography>
        </S.NotYou>
      </Modal>
    </>
  );
};
