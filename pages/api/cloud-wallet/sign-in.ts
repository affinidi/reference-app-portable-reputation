import axios from "axios";
import { z } from "zod";
import { use } from "next-api-middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import { cloudWalletApiUrl, apiKeyHash } from '../env';
import { allowedHttpMethods } from '../middlewares/allowed-http-methods';
import { errorHandler } from '../middlewares/error-handler';

type HandlerResponse = string

const requestSchema = z.object({
  username: z.string(),
}).strict();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const { username } = requestSchema.parse(req.body);

  const { data: token } = await axios<string>(
    `${cloudWalletApiUrl}/v1/users/sign-in-passwordless`,
    {
      method: "POST",
      headers: {
        "Api-Key": apiKeyHash,
      },
      data: {
        username,
      },
    }
  );

  res.status(200).json(token);
};

export default use(allowedHttpMethods("POST"), errorHandler)(handler);
