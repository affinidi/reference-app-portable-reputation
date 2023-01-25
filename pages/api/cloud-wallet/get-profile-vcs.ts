import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { VerifiableCredential } from "types/vc";
import { cloudWalletApiUrl, apiKeyHash } from "../env";

const PROFILE_VC_TYPES = [{ name: "github", type: "GithubProfile" }];

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

  const profileVcs: Record<string, VerifiableCredential> = {};
  for (const { name, type } of PROFILE_VC_TYPES) {
    const vc = vcs.find((vc) => vc.type.includes(type));
    if (vc) {
      profileVcs[name] = vc;
    }
  }

  res.status(200).json(profileVcs);
}
