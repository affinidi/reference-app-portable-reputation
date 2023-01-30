import { VerifiableCredential } from "./vc";

export type Profile = "github";
export type ProfileVcMap = {
  [profile in Profile]: VerifiableCredential;
};
