import axios from "axios";
import { use } from "next-api-middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import { VerifiableCredential } from "types/vc";
import { cloudWalletApiUrl, apiKeyHash } from "../env";
import { allowedHttpMethods } from "../middlewares/allowed-http-methods";
import { errorHandler } from "../middlewares/error-handler";
import { authenticateCloudWallet } from "../helpers/authenticate-cloud-wallet";
import { Profile } from "types/profile";

type HandlerResponse = {
  vcs: {
    [profile in Profile]?: VerifiableCredential
  }
};

const PROFILE_VC_TYPES: { profile: Profile; type: string }[] = [
  { profile: "github", type: "GithubProfile" },
];

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const cloudWalletAccessToken = authenticateCloudWallet(req);

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

  // sort by issuance date (descending)
  vcs.sort(
    (vc1, vc2) => Date.parse(vc2.issuanceDate) - Date.parse(vc1.issuanceDate)
  );

  const response: HandlerResponse = { vcs: {} }
  for (const { profile, type } of PROFILE_VC_TYPES) {
    const vc = vcs.find((vc) => vc.type.includes(type));
    if (vc) {
      response.vcs[profile] = vc;
    }
  }

  res.status(200).json(response);
}

export default use(allowedHttpMethods("GET"), errorHandler)(handler);
