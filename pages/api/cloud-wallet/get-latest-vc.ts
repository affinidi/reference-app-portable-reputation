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

  const { type } = req.query

  const { data: vcs } = await axios(
    `${cloudWalletApiUrl}/v1/wallet/credentials`,
    {
      method: "GET",
      headers: {
        "Api-Key": apiKeyHash,
        Authorization: cloudWalletAccessToken,
      },
    }
  );

  vcs.sort((vc1: any, vc2: any) => Date.parse(vc2.issuanceDate) - Date.parse(vc1.issuanceDate))
  const latestVcByType = vcs.find((vc: any) => vc.type.includes(type))

  res.status(200).json({ vc: latestVcByType ?? null });
};
