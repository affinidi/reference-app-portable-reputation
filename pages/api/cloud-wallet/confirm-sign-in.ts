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

  const { token, confirmationCode } = req.body;

  const { data: tokens } = await axios(
    `${cloudWalletApiUrl}/v1/users/sign-in-passwordless/confirm`,
    {
      method: "POST",
      headers: {
        "Api-Key": apiKeyHash,
      },
      data: {
        token,
        confirmationCode,
      },
    }
  );

  res.status(200).json(tokens);
};
