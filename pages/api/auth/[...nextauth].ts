import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const clientId = process.env.GITHUB_APP_CLIENT_ID || "";
const clientSecret = process.env.GITHUB_APP_CLIENT_SECRET || "";

export const authOptions: NextAuthOptions = {
  providers: [GithubProvider({ clientId, clientSecret })],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account && account.provider === "github" && account.access_token) {
        user.accessToken = account.access_token;
        return true;
      }

      return false;
    },
    async jwt({ token, user }) {
      if (user && "accessToken" in user) {
        token.accessToken = user.accessToken;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};

export default NextAuth(authOptions);
