import { GetServerSideProps } from "next";
import { FC, useState } from "react";
import { getProviders } from "next-auth/react";

import { Button, Container, Header } from "components";

import GithubConnectorCard from "./components/connectors/GithubConnectorCard";
import { ConnectorModal } from "./components/connectors/connectorModal";
import * as S from "./ProfileSetup.styled";

type ProfileSetupProps = {
  providers: ReturnType<typeof getProviders>;
};

const ProfileSetup: FC<ProfileSetupProps> = ({ providers }) => {
  const [isConnectorChecked, setIsConnectorChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header title="Setup your profile" />

      <Container>
        <S.ServiceSelect variant="p1">
          Please select the service that you would like to connect
        </S.ServiceSelect>

        <div className="row">
          <div className="col-12 col-sm-4">
            <GithubConnectorCard
              isChecked={isConnectorChecked}
              setIsChecked={setIsConnectorChecked}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-3">
            {!!providers &&
              Object.values(providers).map((provider) => {
                return (
                  <Button
                    key={provider.id}
                    disabled={!isConnectorChecked}
                    onClick={() =>
                      !isConnectorChecked ? undefined : setIsModalOpen(true)
                    }
                  >
                    Connect to my profile
                  </Button>
                );
              })}
          </div>
        </div>
        {isModalOpen && (
          <ConnectorModal
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            providers={providers}
          />
        )}
      </Container>
    </>
  );
};

export default ProfileSetup;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
