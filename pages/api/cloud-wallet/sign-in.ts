import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { cloudWalletApiUrl, apiKeyHash } from '../env';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ error: "Only POST requests allowed" });
    return;
  }

  const { username } = req.body;

  const { data: token } = await axios(
    `${cloudWalletApiUrl}/v1/users/sign-in-passwordless`,
    {
      method: "POST",
      headers: {
        "Api-Key": apiKeyHash,
      },
      data: {
        username,
      },
    }
  );

  res.status(200).json(token);
};
