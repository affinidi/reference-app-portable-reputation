import axios from "axios";
import { use } from "next-api-middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import { cloudWalletApiUrl, apiKeyHash } from "../env";
import { allowedHttpMethods } from "../middlewares/allowed-http-methods";
import { errorHandler } from "../middlewares/error-handler";
import { authenticateCloudWallet } from '../middlewares/authenticate-cloud-wallet';

type HandlerResponse = {
  did: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<HandlerResponse>) {
  const cloudWalletAccessToken = authenticateCloudWallet(req)

  const { data: did } = await axios<string>(`${cloudWalletApiUrl}/v1/users/get-did`, {
    method: "GET",
    headers: {
      "Api-Key": apiKeyHash,
      Authorization: cloudWalletAccessToken,
    },
  });

  res.status(200).json({ did });
}

export default use(allowedHttpMethods("GET"), errorHandler)(handler);
