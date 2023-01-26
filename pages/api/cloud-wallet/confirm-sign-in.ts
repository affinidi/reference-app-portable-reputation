import axios from "axios";
import { z } from "zod";
import { use } from "next-api-middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import { cloudWalletApiUrl, apiKeyHash } from "../env";
import { allowedHttpMethods } from "../middlewares/allowed-http-methods";
import { errorHandler } from "../middlewares/error-handler";

type HandlerResponse = {
  accessToken: string;
};

const requestSchema = z.object({
  token: z.string(),
  confirmationCode: z.string(),
}).strict();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const { token, confirmationCode } = requestSchema.parse(req.body);

  const {
    data: { accessToken },
  } = await axios<{ accessToken: string }>(
    `${cloudWalletApiUrl}/v1/users/sign-in-passwordless/confirm`,
    {
      method: "POST",
      headers: {
        "Api-Key": apiKeyHash,
      },
      data: {
        token,
        confirmationCode,
      },
    }
  );

  res.status(200).json({ accessToken });
}

export default use(allowedHttpMethods("POST"), errorHandler)(handler);
