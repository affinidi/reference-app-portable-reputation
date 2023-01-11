import { createOAuthUserAuth } from "@octokit/auth-oauth-user";

const { GITHUB_APP_CLIENT_ID, GITHUB_APP_CLIENT_SECRET } = process.env;

if (!GITHUB_APP_CLIENT_ID || !GITHUB_APP_CLIENT_SECRET) {
  throw Error("No GITHUB APP ClIENT credentials defined");
}

export const authWithCode = (code: string) => {
  return createOAuthUserAuth({
    clientId: GITHUB_APP_CLIENT_ID,
    clientSecret: GITHUB_APP_CLIENT_SECRET,
    code,
  });
};
