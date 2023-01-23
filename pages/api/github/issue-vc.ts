import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { gatherGithubProfile } from "../../../services/github/gather-github-profile";
import { generateGithubProfileVc } from "../../../services/github/generate-github-profile-vc";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
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

  const unsignedGithubProfileVc = generateGithubProfileVc(holderDid, credentialSubject);

  const {
    data: {
      wallet: { accessToken: cloudWalletAccessToken },
    },
  } = await axios(
    `https://affinidi-iam.staging.affinity-project.org/api/v1/cloud-wallet/${process.env.AFFINIDI_PROJECT_DID}/authenticate`,
    {
      method: "POST",
      headers: {
        "Api-Key": process.env.AFFINIDI_API_KEY_HASH,
      },
    }
  );

  const {
    data: { signedCredential: vc },
  } = await axios(
    "https://cloud-wallet-api.staging.affinity-project.org/api/v1/wallet/sign-credential",
    {
      method: "POST",
      headers: {
        "Api-Key": process.env.AFFINIDI_API_KEY_HASH,
        Authorization: cloudWalletAccessToken,
      },
      data: {
        unsignedCredential: unsignedGithubProfileVc,
      },
    }
  );

  res.status(200).json({ vc });
};

export default handler;
