import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { use } from "next-api-middleware";
import { VerifiableCredential } from "types/vc";
import {
  affinidiIamApiUrl,
  projectDid,
  apiKeyHash,
  cloudWalletApiUrl,
} from "../env";
import { authenticateGithub } from "../helpers/authenticate-github";
import { gatherGithubProfile } from "./helpers/gather-github-profile";
import { generateGithubProfileVc } from "./helpers/generate-github-profile-vc";
import { allowedHttpMethods } from '../middlewares/allowed-http-methods';
import { errorHandler } from '../middlewares/error-handler';
import { logger } from '../logger';

type HandlerResponse = {
  vc: VerifiableCredential;
};

const requestSchema = z
  .object({
    holderDid: z.string(),
  })
  .strict();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const githubAccessToken = await authenticateGithub(req);
  logger.info({ githubAccessToken })

  const { holderDid } = requestSchema.parse(req.body);
  logger.info({ holderDid })

  const credentialSubject = await gatherGithubProfile(githubAccessToken);
  logger.info({ credentialSubject: Boolean(credentialSubject) })

  const unsignedGithubProfileVc = generateGithubProfileVc(
    holderDid,
    credentialSubject
  );

  const {
    data: {
      wallet: { accessToken: cloudWalletAccessToken },
    },
  } = await axios<{ wallet: { accessToken: string } }>(
    `${affinidiIamApiUrl}/v1/cloud-wallet/${projectDid}/authenticate`,
    {
      method: "POST",
      headers: {
        "Api-Key": apiKeyHash,
      },
    }
  );
  logger.info({ cloudWalletAccessToken })

  const {
    data: { signedCredential: vc },
  } = await axios<{ signedCredential: VerifiableCredential }>(
    `${cloudWalletApiUrl}/v1/wallet/sign-credential`,
    {
      method: "POST",
      headers: {
        "Api-Key": apiKeyHash,
        Authorization: cloudWalletAccessToken,
      },
      data: {
        unsignedCredential: unsignedGithubProfileVc,
      },
    }
  );
  logger.info({ signedCredential: Boolean(vc) })

  res.status(200).json({ vc });
}

export default use(allowedHttpMethods("POST"), errorHandler)(handler);
