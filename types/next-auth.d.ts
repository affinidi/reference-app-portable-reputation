import NextAuth, { DefaultSession, User as NextUser } from "next-auth";

declare module "next-auth" {
  interface User extends NextUser {
    accessToken: string;
  }
  interface Session extends DefaultSession {
    accessToken: string;
  }
}
