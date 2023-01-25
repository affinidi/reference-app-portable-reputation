import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { affinidiIamApiUrl, projectDid, apiKeyHash, cloudWalletApiUrl } from '../env';
import { gatherGithubProfile, } from "./helpers/gather-github-profile";
import { generateGithubProfileVc } from './helpers/generate-github-profile-vc';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).send({ error: "Only POST requests allowed" });
    return;
  }

  const session = await getSession({ req });
  if (!session?.githubAccessToken) {
    res.status(401).json({ error: "No session or github access token" });
    return;
  }

  const holderDid = req.body.holderDid;

  const credentialSubject = await gatherGithubProfile(
    session.githubAccessToken
  );

  const unsignedGithubProfileVc = generateGithubProfileVc(
    holderDid,
    credentialSubject
  );

  const {
    data: {
      wallet: { accessToken: cloudWalletAccessToken },
    },
  } = await axios(
    `${affinidiIamApiUrl}/v1/cloud-wallet/${projectDid}/authenticate`,
    {
      method: "POST",
      headers: {
        "Api-Key": apiKeyHash,
      },
    }
  );

  const {
    data: { signedCredential: vc },
  } = await axios(`${cloudWalletApiUrl}/v1/wallet/sign-credential`, {
    method: "POST",
    headers: {
      "Api-Key": apiKeyHash,
      Authorization: cloudWalletAccessToken,
    },
    data: {
      unsignedCredential: unsignedGithubProfileVc,
    },
  });

  res.status(200).json({ vc });
}
