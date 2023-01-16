import { Octokit } from "@octokit/rest";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import GithubService from "../../../services/github";
import { GithubUser } from "../../../types/github";

type Data = {
  user?: GithubUser;
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session = await getSession({ req });
  const user = await GithubService.getUserData(
    new Octokit({ auth: session?.accessToken })
  );

  res.json({ user });
};

export default handler;
