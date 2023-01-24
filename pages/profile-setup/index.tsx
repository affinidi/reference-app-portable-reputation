import { GetServerSideProps } from "next";
import { FC, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

import { Button, Container, Header } from "components";

import GithubConnectorCard from "./components/connectors/GithubConnectorCard";
import * as S from "./ProfileSetup.styled";
import { cloudWalletService } from "services/cloud-wallet";
import { StoredW3CCredential } from "services/cloud-wallet/cloud-wallet.api";

type ProfileSetupProps = {
  providers: ReturnType<typeof getProviders>;
};

export const CheckCredentials = async () => {
  const vcs = await cloudWalletService.getAllCredentials();

  const reputationVcs = vcs.filter((vc) =>
    (vc as StoredW3CCredential).type?.includes("PortableReputation")
  ) as StoredW3CCredential[];

  return reputationVcs;
};

export const ProfileSetup: FC<ProfileSetupProps> = ({ providers }) => {
  const [isConnectorChecked, setIsConnectorChecked] = useState(false);

  const connectToGithub = async (id: string) => {
    await signIn(id, { callbackUrl: "/github" });
  };

  return (
    <>
      <Header title="Setup your profile" />

      <Container>
        <S.ServiceSelect variant="p1">
          Please select the service that you would like to connect
        </S.ServiceSelect>

        <GithubConnectorCard
          isChecked={isConnectorChecked}
          setIsChecked={setIsConnectorChecked}
        />

        <div className="col-12 col-sm-3">
          {!!providers &&
            Object.values(providers).map((provider) => {
              return (
                <>
                  <Button
                    disabled={!isConnectorChecked}
                    onClick={() =>
                      !isConnectorChecked
                        ? undefined
                        : connectToGithub(provider.id)
                    }
                  >
                    {"Connect to my profile"}
                  </Button>
                </>
              );
            })}
        </div>
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
