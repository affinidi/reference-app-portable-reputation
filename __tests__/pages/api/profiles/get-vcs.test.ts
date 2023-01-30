import { createMocks } from "node-mocks-http";
import { cloudWalletClient } from "pages/api/clients/cloud-wallet-client";
import { handler } from "pages/api/profiles/get-vcs";
import { VerifiableCredential } from "types/vc";

function createFakeVc(input: {
  type: string;
  issuanceDate: Date;
}): VerifiableCredential {
  return {
    "@context": ["http://example.com/jsonld"],
    type: ["VerifiableCredential", input.type],
    issuanceDate: input.issuanceDate.toISOString(),
    id: "fake-vc",
    holder: {
      id: "did:fake",
    },
    credentialSubject: { hello: "world" },
    credentialSchema: {
      type: "FakeType",
      id: "http://example.com/json",
    },
  };
}

describe("/api/profiles/get-vcs", () => {
  const accessToken = 'fake-access-token'

  it("should respond with found profile VCs", async () => {
    const githubVc = createFakeVc({
      type: "GithubProfile",
      issuanceDate: new Date("2020-01-03"),
    })

    jest
      .spyOn(cloudWalletClient, "getCredentials")
      .mockResolvedValue({
        vcs: [
          createFakeVc({
            type: "SomeOtherType",
            issuanceDate: new Date("2020-01-05"),
          }),
          githubVc,
          createFakeVc({
            type: "GithubProfile",
            issuanceDate: new Date("2020-01-01"),
          }),
          createFakeVc({
            type: "GithubProfile",
            issuanceDate: new Date("2020-01-02"),
          }),
        ],
      });

    const { req, res } = createMocks({
      method: "GET",
      headers: {
        authorization: accessToken,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({
      vcs: {
        github: githubVc,
      }
    });
  });

  it("should respond with empty object when no profile VCs found", async () => {
    jest
      .spyOn(cloudWalletClient, "getCredentials")
      .mockResolvedValue({
        vcs: [
          createFakeVc({
            type: "SomeOtherType",
            issuanceDate: new Date("2020-01-05"),
          }),
        ],
      });

    const { req, res } = createMocks({
      method: "GET",
      headers: {
        authorization: accessToken,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({
      vcs: {}
    });
  });
});
