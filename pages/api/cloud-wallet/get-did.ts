import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { cloudWalletApiUrl, apiKeyHash } from '../env';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).send({ error: "Only GET requests allowed" });
    return;
  }

  const cloudWalletAccessToken = req.headers['authorization']
  if (!cloudWalletAccessToken) {
    res.status(401).json({ error: "Cloud Wallet access token is not provided" });
    return;
  }

  const { data: did } = await axios(
    `${cloudWalletApiUrl}/v1/users/get-did`,
    {
      method: "GET",
      headers: {
        "Api-Key": apiKeyHash,
        Authorization: cloudWalletAccessToken,
      },
    }
  );

  res.status(200).json(did);
};
