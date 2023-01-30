import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { useRouter } from "next/router";

import { Box, Container, Header, InfoOutlinedIcon, Spinner } from "components";
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { SubInfo } from "./components/SublInfo/SubInfo";
import { ListInfo } from "./components/ListlInfo/ListInfo";

import { VerifiableCredential } from "types/vc";
import { ROUTES } from "utils";

import * as S from "./Github.styled";
import useVcProfiles from "hooks/useVcProfiles";

const Github: FC = () => {
  const { push } = useRouter();
  const { status } = useSession();
  const [vc, setVc] = useState<VerifiableCredential>();
  const vcs = useVcProfiles();

  useEffect(() => {
    if (!vcs) return;

    if (vcs.github) {
      setVc(vcs.github);
    } else {
      push(ROUTES.profileSetup);
    }
  }, [push, vcs]);

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
