import type { NextApiRequest, NextApiResponse } from "next";
import { request } from "@octokit/request";

import { authWithCode } from "../../../connectors/github";

type Data = {
  name?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { code } = req.query;
  if (!code) {
    res.status(404).json({ error: "No code" });
  }

  if (typeof code !== "string") {
    return;
  }

  authWithCode(code).hook(request, "GET user");
  res.status(200).json({ name: "Atch" });
}
