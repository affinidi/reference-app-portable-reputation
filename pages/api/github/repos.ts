import { Octokit } from "@octokit/rest";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import GithubService from "../../../services/github";
import { GithubRepo } from "../../../types/github";

type GithubReposResponse = {
  repos?: GithubRepo[];
  error?: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GithubReposResponse>
) => {
  const session = await getSession({ req });

  const repos = await GithubService.getUserRepos(
    new Octokit({ auth: session?.accessToken })
  );

  res.status(200).json({ repos });
};

export default handler;
