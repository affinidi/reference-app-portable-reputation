import { FC, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { Box, Container, Header, InfoOutlinedIcon, Spinner } from "components";

import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { SubInfo } from "./components/SublInfo/SubInfo";
import { ListInfo } from "./components/ListlInfo/ListInfo";
import * as S from "./Github.styled";
import { VerifiableCredential } from "../../types/vc";
import { hostUrl } from "../env";
import { getItemFromSessionStorage } from "../../hooks/useSessionStorage";
import axios from 'axios';
import { createCloudWalletAuthenticationHeaders } from '../../hooks/useAuthentication';

const Github: FC = () => {
  const { status } = useSession();
  const [vc, setVc] = useState<VerifiableCredential>();

  useEffect(() => {
    if (status === "loading") return;

    async function fetchVc() {
      const { data: { vcs } } = await (
        await axios(`${hostUrl}/api/profiles/get-vcs`, {
          method: "GET",
          headers: createCloudWalletAuthenticationHeaders(),
        })
      );

      if (!vcs.github) {
        console.log(
          "You don't have a Github profile VC yet, redirecting to profile setup page"
        );
        // TODO: redirect
        return;
      }

      setVc(vcs.github);
    }

    fetchVc();
  }, [status]);

  if (status === "loading" || !vc) {
    return <Spinner />;
  }

  return (
    <>
      <Header title="My GitHub profile" />

      <Container>
        <S.Wrapper>
          <S.LastUpdate direction="row" alignItems="center" gap={8}>
            <InfoOutlinedIcon />

            <S.GrayText variant="p3">
              Last import of Github data:{" "}
              <b>{format(new Date(vc.issuanceDate), "dd/MM/yyyy")}</b>
            </S.GrayText>
          </S.LastUpdate>

          <Box gap={64}>
            <GeneralInfo info={vc.credentialSubject} />

            <SubInfo info={vc.credentialSubject} />

            <ListInfo info={vc.credentialSubject} />
          </Box>
        </S.Wrapper>
      </Container>
    </>
  );
};

export default Github;
