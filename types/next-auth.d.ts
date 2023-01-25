import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    githubAccessToken: string
  }
  interface Session extends DefaultSession {
    githubAccessToken: string
  }
}
