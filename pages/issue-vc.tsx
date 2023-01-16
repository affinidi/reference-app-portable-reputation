import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import EmailValidator from "email-validator";

import { GithubTokenResponse } from "./api/github/token";
import { useLocalStorage } from "../hooks/useLocalStorage";

import styles from "../styles/Home.module.css";

type IssueVCProps = GithubTokenResponse;

const IssueVC: FC<IssueVCProps> = (props) => {
  const [storedToken] = useLocalStorage<string>("github_token");
  const [error, setError] = useState("");
  const email = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    email.current?.focus();
  }, []);

  const handleIssueDeveloperVC = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!EmailValidator.validate(email.current?.value || "")) {
      alert("invalid email address");
      return;
    }

    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/affinidi/issue-vc`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessToken: storedToken,
            email: email.current?.value,
          }),
        }
      );
      if (![200, 201].includes(resp.status)) {
        throw Error();
      }
      console.log("response json data:", await resp.json());
      setError("");
    } catch (error) {
      setError("There was an error when trying to issue your VC");
    }
  };

  return (
    <main className="text-gray-600 body-font">
      <div className="flex flex-col justify-center items-center h-[50vh]">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Issue Your Developer VC
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handleIssueDeveloperVC}>
          <input
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
            type="email"
            ref={email}
            placeholder="Enter your email address"
          />
          <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            type="submit"
            onClick={handleIssueDeveloperVC}
          >
            Issue VC
          </button>
          {error && (
            <div>
              <pre>{error}</pre>
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default IssueVC;
