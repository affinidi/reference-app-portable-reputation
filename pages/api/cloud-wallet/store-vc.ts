import axios from "axios";
import { z } from "zod";
import { use } from "next-api-middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import { cloudWalletApiUrl, apiKeyHash } from '../env';
import { authenticateCloudWallet } from '../helpers/authenticate-cloud-wallet';
import { allowedHttpMethods } from '../middlewares/allowed-http-methods';
import { errorHandler } from '../middlewares/error-handler';

const requestSchema = z.object({
  vc: z.unknown(),
}).strict();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  const cloudWalletAccessToken = authenticateCloudWallet(req)

  const { vc } = requestSchema.parse(req.body);

  await axios<void>(
    `${cloudWalletApiUrl}/v1/wallet/credentials`,
    {
      method: "POST",
      headers: {
        "Api-Key": apiKeyHash,
        Authorization: cloudWalletAccessToken,
      },
      data: {
        data: [vc]
      },
    }
  );

  res.status(200).end();
};

export default use(allowedHttpMethods("POST"), errorHandler)(handler);
