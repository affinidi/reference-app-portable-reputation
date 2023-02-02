import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { use } from 'next-api-middleware'
import { VerifiableCredential } from 'types/vc'
import { authenticateGithub } from '../helpers/authenticate-github'
import { gatherGithubProfile } from './helpers/gather-github-profile'
import { generateGithubProfileVc } from './helpers/generate-github-profile-vc'
import { allowedHttpMethods } from '../middlewares/allowed-http-methods'
import { errorHandler } from '../middlewares/error-handler'
import { cloudWalletClient } from '../clients/cloud-wallet-client'
import { iamClient } from '../clients/iam-client'
import { projectDid } from '../env'

type HandlerResponse = {
  vc: VerifiableCredential;
};

const requestSchema = z
  .object({
    holderDid: z.string(),
  })
  .strict()

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const githubAccessToken = await authenticateGithub(req)

  const { holderDid } = requestSchema.parse(req.body)

  const credentialSubject = await gatherGithubProfile(githubAccessToken)

  const unsignedGithubProfileVc = generateGithubProfileVc(
    holderDid,
    credentialSubject
  )

  const {
    wallet: { accessToken: cloudWalletAccessToken },
  } = await iamClient.authenticateCloudWallet({ did: projectDid })

  const { vc } = await cloudWalletClient.signCredential(
    { vc: unsignedGithubProfileVc },
    { accessToken: cloudWalletAccessToken }
  )

  res.status(200).json({ vc })
}

export default use(allowedHttpMethods('POST'), errorHandler)(handler)
