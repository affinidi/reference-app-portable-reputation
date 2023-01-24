import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { VerifiableCredential } from "../../../types/vc";
import { cloudWalletApiUrl, apiKeyHash } from "../env";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).send({ error: "Only GET requests allowed" });
    return;
  }

  const cloudWalletAccessToken = req.headers["authorization"];
  if (!cloudWalletAccessToken) {
    res
      .status(401)
      .json({ error: "Cloud Wallet access token is not provided" });
    return;
  }

  const rawTypes = req.query.types;
  if (!rawTypes || Array.isArray(rawTypes)) {
    res.status(400).json({ error: "Invalid types" });
    return;
  }

  const types = rawTypes.split(",");

  const { data: vcs } = await axios<VerifiableCredential[]>(
    `${cloudWalletApiUrl}/v1/wallet/credentials`,
    {
      method: "GET",
      headers: {
        "Api-Key": apiKeyHash,
        Authorization: cloudWalletAccessToken,
      },
    }
  );

  vcs.sort(
    (vc1, vc2) => Date.parse(vc2.issuanceDate) - Date.parse(vc1.issuanceDate)
  );

  const filteredVcs = [];
  for (const type of types) {
    const vc = vcs.find((vc) => vc.type.includes(type));
    if (vc) filteredVcs.push(vc);
  }

  res.status(200).json({ vcs: filteredVcs });
}
