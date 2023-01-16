import { Octokit } from "@octokit/rest";
import { GithubRepo, GithubUser, GithubPullRequest } from "../types/github";

const GithubService = {
  getUserData: async (kit: Octokit): Promise<GithubUser> => {
    const resp = await kit.rest.users.getAuthenticated();
    return resp.data as GithubUser;
  },
  getUserRepos: async (kit: Octokit): Promise<GithubRepo[]> => {
    const resp = await kit.repos.listForAuthenticatedUser();
    return resp.data as GithubRepo[];
  },
  getUserProgrammingLanguages: async function (
    kit: Octokit
  ): Promise<string[]> {
    const user = await this.getUserData(kit);
    const repos = await this.getUserRepos(kit);
    return Array.from(
      (
        await Promise.all(
          repos.map(async (repo) => {
            try {
              const r = await kit.repos.listLanguages({
                owner: user.login,
                repo: repo.name,
              });
              return Object.keys(r.data);
            } catch (e) {
              console.log('error while fetching languages for repo: ', e)
              return []
            }
          })
        )
      )
        .flat()
        .reduce((acc, curr) => {
          acc.add(curr);
          return acc;
        }, new Set<string>())
    );
  },
  getPullRequests: async function (
    kit: Octokit
  ) {
    const user = await this.getUserData(kit);
    const repos = await this.getUserRepos(kit);
    return Array.from(
      (
        await Promise.all(   
          repos.map(async (repo) => {
            try {
              const r = await kit.rest.pulls.list({
                owner: user.login,
                repo: repo.name,
              });
              return Object.keys(r.data);
            } catch (e) {
              console.log('error while fetching pull requests for repo: ', e)
              return []
            }
          })
        )
      )
        .flat()
        .reduce((acc, curr) => {
          acc.add(curr);
          return acc;
        }, new Set<string>())
    );
  }
};

export default GithubService;
