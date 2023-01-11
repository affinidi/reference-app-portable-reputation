import { Octokit } from "@octokit/rest";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import GithubService from "../../../services/github";
import { GithubReposLanguages } from "../../../types/github";

type GithubReposLanguagesResponse = {
  languages?: GithubReposLanguages[];
  error?: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GithubReposLanguagesResponse>
) => {
  const session = await getSession({ req });

  const languages = await GithubService.getUserProgrammingLanguages(
    new Octokit({ auth: session?.accessToken })
  );

  res.status(200).json({ languages });
};

export default handler;
