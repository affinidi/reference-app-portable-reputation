export interface GithubProfileCredentialSubject {
  userId: string;
  username: string;
  company?: string;
  location?: string;
  profilePictureUrl?: string;
  organizationsList: {
    count: number;
    items: { name: string }[];
  };
  ownedRepositoriesList: {
    count: number;
    items: { name: string }[];
  };
  languagesList: {
    count: number;
    items: { language: string; repositories: number }[];
  };
  commits: {
    total: number;
    lastWeek: number;
    lastYear: number;
  };
  contributions: {
    lastWeek: number;
    lastYear: number;
  };
  pullRequests: number;
  solvedIssues: number;
  followers: number;
  following: number;
  starredRepositories: number;
  watchedRepositories: number;
}
