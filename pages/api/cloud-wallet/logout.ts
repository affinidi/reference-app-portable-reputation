import axios from "axios";
import { use } from "next-api-middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import { cloudWalletApiUrl, apiKeyHash } from '../env';
import { allowedHttpMethods } from '../middlewares/allowed-http-methods';
import { errorHandler } from '../middlewares/error-handler';
import { authenticateCloudWallet } from '../middlewares/authenticate-cloud-wallet';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  const cloudWalletAccessToken = authenticateCloudWallet(req)

  await axios<void>(
    `${cloudWalletApiUrl}/v1/users/logout`,
    {
      method: "POST",
      headers: {
        "Api-Key": apiKeyHash,
        Authorization: cloudWalletAccessToken,
      },
    }
  );

  res.status(200).end()
};

export default use(allowedHttpMethods("POST"), errorHandler)(handler);
