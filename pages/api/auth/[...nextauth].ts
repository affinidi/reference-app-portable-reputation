import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { githubClientSecret, authJwtSecret, githubClientId } from '../env';

if (!githubClientId || !githubClientSecret) {
  throw Error("Github client ID or client secret are not provided");
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
      authorization: { params: { scope: "repo read:org read:user" } },
    }),
  ],
  secret: authJwtSecret,
  callbacks: {
    async signIn({ user, account }) {
      if (account && account.provider === "github" && account.access_token) {
        user.githubAccessToken = account.access_token;
        return true;
      }

      return false;
    },
    async jwt({ token, user }) {
      if (user?.githubAccessToken) {
        token.githubAccessToken = user.githubAccessToken;
      }

      return token;
    },
    async session({ session, token }) {
      session.githubAccessToken = token.githubAccessToken as string;
      return session;
    },
  },
};

export default NextAuth(authOptions);
