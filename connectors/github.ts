import { createOAuthUserAuth } from "@octokit/auth-oauth-user";

const { NEXT_PUBLIC_GITHUB_APP_CLIENT_ID, NEXT_PUBLIC_GITHUB_APP_CLIENT_SECRET } = process.env;

if (!NEXT_PUBLIC_GITHUB_APP_CLIENT_ID || !NEXT_PUBLIC_GITHUB_APP_CLIENT_SECRET) {
  throw Error("No GITHUB APP ClIENT credentials defined");
}

export const authWithCode = (code: string) => {
  return createOAuthUserAuth({
    clientId: NEXT_PUBLIC_GITHUB_APP_CLIENT_ID,
    clientSecret: NEXT_PUBLIC_GITHUB_APP_CLIENT_SECRET,
    code,
  });
};
