import { Session } from "next-auth";
import Link from "next/link";
import { FC, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Spinner } from "../components";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { GithubUser } from "../types/github";

type GithubProps = {
  session: Session;
};

const Github: FC<GithubProps> = (props) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const token = "";
  const [storedToken] = useLocalStorage<string>("github_token", token);

  const handleSignout = async () => {
    await signOut({ redirect: false });
    return router.push("/");
  };

  if (status === "loading") {
    return (<Spinner />);
  }
  if (status === "unauthenticated" || !session) {
    router.replace("/sign-in");
  }

  const user = session?.user;

  return (
    <main className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <div className="flex flex-col items-center gap-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Welcome <span className="italic">{user?.name || "unknown developer"}</span>
            </h1>
            <img
              src={user?.image || ""}
              className="object-cover"
              // height={64}
              // width={64}
              alt={user?.name || ""}
            />
          </div>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Fetch your data from Github
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Access Token
          </p>
          <pre>{storedToken || token}</pre>
          <button onClick={handleSignout}> Sign-out </button>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"></div>
        <div className="flex mt-16 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <div>Or</div>
          <Link href="/issue-vc">
            <button className="flex mx-auto mt-8 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg">
              Issue your developer VC
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Github;
