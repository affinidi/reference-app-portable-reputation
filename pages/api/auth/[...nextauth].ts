import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const clientId = process.env.GITHUB_APP_CLIENT_ID || "";
const clientSecret = process.env.GITHUB_APP_CLIENT_SECRET || "";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId,
      clientSecret,
      authorization: { params: { scope: "repo read:org read:user" } },
    }),
  ],
  secret: process.env.JWT_SECRET,
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
