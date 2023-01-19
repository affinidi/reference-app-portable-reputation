import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: ''
})

async function fetch() {
  const { data: user } = await octokit.rest.users.getAuthenticated()

  const weekAgo = new Date()
  weekAgo.setUTCDate(weekAgo.getUTCDate() - 7)

  const yearAgo = new Date()
  yearAgo.setUTCFullYear(weekAgo.getUTCFullYear() - 1)

  const { data: { total_count: commitsTotal } } = await octokit.rest.search.commits({
    q: `author:${user.login}`,
    per_page: 1,
  })

  const { viewer } = await octokit.graphql(`
    query ($login: String!, $yearAgo: DateTime!, $weekAgo: DateTime!) {
      viewer {
        id
        login
        avatarUrl
        company
        location
        followers {
          totalCount
        }
        following {
          totalCount
        }
        starredRepositories {
          totalCount
        }
        watching {
          totalCount
        }
        gists {
          totalCount
        }
        solvedIssues: issues(states: CLOSED, filterBy: {assignee: $login}) {
          totalCount
        }
        pullRequests {
          totalCount
        }
        contributionsLastYear: contributionsCollection(from: $yearAgo) {
          contributionCalendar {
            totalContributions
          }
          totalCommitContributions
        }
        contributionsLastWeek: contributionsCollection(from: $weekAgo) {
          contributionCalendar {
            totalContributions
          }
          totalCommitContributions
        }
        repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          totalCount
          nodes {
            name
            isPrivate
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `, { login: user.login, weekAgo, yearAgo })
  
  const languageUsageMap = {}
  for (const repo of viewer.repositories.nodes) {
    for (const language of repo.languages.nodes) {
      if (!(language.name in languageUsageMap)) {
        languageUsageMap[language.name] = 0
      }

      languageUsageMap[language.name]++
    }
  }

  const languages = Object.entries(languageUsageMap)
    .sort((a, b) => b[1] - a[1])
    .map(([language, repositories]) => ({
      language,
      repositories,
    }))

  return {
    userId: viewer.id,
    username: viewer.login,
    company: viewer.company,
    location: viewer.location,
    profilePictureUrl: viewer.avatarUrl,
    ownedRepositoriesList: {
      count: viewer.repositories.totalCount,
      items: viewer.repositories.nodes
        .filter(node => !node.isPrivate)
        .map(node => ({ name: node.name })),
    },
    languagesList: {
      count: languages.length,
      items: languages,
    },
    commits: {
      total: commitsTotal,
      lastWeek: viewer.contributionsLastWeek.totalCommitContributions,
      lastYear: viewer.contributionsLastYear.totalCommitContributions,
    },
    solvedIssues: viewer.solvedIssues.totalCount,
    followers: viewer.followers.totalCount,
    following: viewer.following.totalCount,
    starredRepositories: viewer.starredRepositories.totalCount,
    watchedRepositories: viewer.watching.totalCount,
    contributions: {
      lastWeek: viewer.contributionsLastWeek.contributionCalendar.totalContributions,
      lastYear: viewer.contributionsLastYear.contributionCalendar.totalContributions,
    },
    pullRequests: viewer.pullRequests.totalCount,
  }
}

async function test() {
  const result = await fetch()
  console.log(JSON.stringify(result, null, 2))
}

test()
  .then(() => console.log('Success!'))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
