import { FC, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { Box, Container, Header, InfoOutlinedIcon, Spinner } from "components";

import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { SubInfo } from "./components/SublInfo/SubInfo";
import { ListInfo } from "./components/ListlInfo/ListInfo";
import * as S from "./Github.styled";

const data = {
  issuanceDate: "2023-01-01T10:00:00.000Z",
  credentialSubject: {
    userId: "",
    username: "vitaly-rudenko",
    company: undefined,
    location: "Ukraine",
    profilePictureUrl:
      "https://avatars.githubusercontent.com/u/1491646?u=12c196756d6173ef0333efe10302480aa7ef2b5f&v=4",
    ownedRepositoriesList: {
      count: 47,
      items: [
        {
          name: "outage-tracker",
        },
        {
          name: "Paper",
        },
        {
          name: "squad-bot",
        },
        {
          name: "carcaso",
        },
        {
          name: "notion-timeline-widget",
        },
        {
          name: "quickpoly",
        },
        {
          name: "declutter-me",
        },
        {
          name: "html-builder",
        },
        {
          name: "qilan",
        },
        {
          name: "dependency-registry",
        },
        {
          name: "json-editor",
        },
      ],
    },
    languagesList: {
      count: 17,
      items: [
        {
          language: "JavaScript",
          repositories: 35,
        },
        {
          language: "HTML",
          repositories: 17,
        },
        {
          language: "CSS",
          repositories: 15,
        },
        {
          language: "Shell",
          repositories: 10,
        },
        {
          language: "Java",
          repositories: 10,
        },
        {
          language: "Dockerfile",
          repositories: 8,
        },
        {
          language: "Procfile",
          repositories: 3,
        },
        {
          language: "TypeScript",
          repositories: 3,
        },
        {
          language: "PHP",
          repositories: 2,
        },
        {
          language: "Rust",
          repositories: 2,
        },
        {
          language: "ASP.NET",
          repositories: 2,
        },
        {
          language: "HCL",
          repositories: 1,
        },
        {
          language: "Kotlin",
          repositories: 1,
        },
        {
          language: "GLSL",
          repositories: 1,
        },
        {
          language: "Ruby",
          repositories: 1,
        },
        {
          language: "CoffeeScript",
          repositories: 1,
        },
        {
          language: "Haxe",
          repositories: 1,
        },
      ],
    },
    commits: {
      total: 1520,
      lastWeek: 0,
      lastYear: 485,
    },
    solvedIssues: 2,
    followers: 32,
    following: 0,
    starredRepositories: 207,
    watchedRepositories: 13,
    contributions: {
      lastWeek: 0,
      lastYear: 538,
    },
    organizationsList: {
      count: 1,
      items: [
        {
          name: "Affinidi",
        },
      ],
    },
    pullRequests: 78,
  },
};

const Github: FC = () => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/sign-in");
    }
  }, [status, router.replace]);

  if (status === "loading") {
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
              <b>{format(new Date(data.issuanceDate), "dd/MM/yyyy")}</b>
            </S.GrayText>
          </S.LastUpdate>

          <Box gap={64}>
            <GeneralInfo info={data.credentialSubject} />

            <SubInfo info={data.credentialSubject} />

            <ListInfo info={data.credentialSubject} />
          </Box>
        </S.Wrapper>
      </Container>
    </>
  );
};

export default Github;
