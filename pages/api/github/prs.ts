import { Octokit } from "@octokit/rest";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import GithubService from "../../../services/github";
import { GithubPullRequest } from "../../../types/github";

type GithubPRsResponse = {
  prs?: GithubPullRequest[];
  error?: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GithubPRsResponse>
) => {
  const session = await getSession({ req });

  const prs = await GithubService.getPullRequests(
    new Octokit({ auth: session?.accessToken })
  );

  res.status(200).json({ prs });
};

export default handler;
