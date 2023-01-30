import axios from "axios";
import { GetServerSideProps } from "next";
import { FC, useEffect, useState } from "react";
import { getProviders } from "next-auth/react";
import { useRouter } from "next/router";

import { Button, Container, Header, Spinner } from "components";
import GithubConnectorCard from "./components/connectors/GithubConnectorCard";
import { ConnectorModal } from "./components/connectors/connectorModal";

import { ROUTES } from "utils";

import * as S from "./ProfileSetup.styled";
import useVcFetch from "hooks/useFetchVc";

type ProfileSetupProps = {
  providers: ReturnType<typeof getProviders>;
};

const ProfileSetup: FC<ProfileSetupProps> = ({ providers }) => {
  const [isGithubConnectorChecked, setIsGithubConnectorChecked] =
    useState(false);
  const [isConnectorModalOpen, setIsConnectorModalOpen] = useState(false);
  const { push } = useRouter();
  const vcs = useVcFetch();

  console.log("vcs in profile setup", vcs);

  useEffect(() => {
    if (vcs?.github) {
      push(ROUTES.github);
    }
  }, [push, vcs]);

  if (!vcs) {
    return <Spinner />;
  }

  return (
    <>
      <Header title="Setup your profile" />

      <Container>
        <S.ServiceSelect variant="p1">
          Please select the service that you would like to connect
        </S.ServiceSelect>

        <S.CardRow className="row">
          <div className="col-12 col-sm-4">
            <GithubConnectorCard
              isChecked={isGithubConnectorChecked}
              setIsChecked={setIsGithubConnectorChecked}
            />
          </div>
        </S.CardRow>

        <div className="row">
          <div className="col-12 col-sm-3">
            {Object.values(providers).map((provider) => {
              return (
                <Button
                  key={provider.id}
                  disabled={!isGithubConnectorChecked}
                  onClick={() =>
                    !isGithubConnectorChecked
                      ? undefined
                      : setIsConnectorModalOpen(true)
                  }
                >
                  Connect my Github profile
                </Button>
              );
            })}
          </div>
        </div>
        <ConnectorModal
          isOpen={isConnectorModalOpen}
          setIsOpen={setIsConnectorModalOpen}
        />
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
