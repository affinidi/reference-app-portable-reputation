import type { NextApiRequest, NextApiResponse } from "next";

export type GithubTokenResponse = {
  token: string;
  error?: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GithubTokenResponse>
) => {
  const { code } = req.query;
  if (!code) {
    res.status(404).json({ token: "", error: "No code" });
    return;
  }

  if (typeof code !== "string") {
    res.status(404).json({ token: "", error: "Wrong code format" });
    return;
  }

  const params = `client_id=${process.env.GITHUB_APP_CLIENT_ID}&client_secret=${process.env.GITHUB_APP_CLIENT_SECRET}&code=${code}`;
  const resp = await fetch(
    `https://github.com/login/oauth/access_token?${params}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  );
  const data: { access_token: string; token_type: string; scope: string } =
    await resp.json();

  res.json({ token: data.access_token });
};

export default handler;
