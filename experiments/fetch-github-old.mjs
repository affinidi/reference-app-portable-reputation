import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: ''
})

async function iterateAll(method) {
  const iterator = octokit.paginate.iterator(method, { per_page: 50 })

  const results = []
  for await (const result of iterator) {
    results.push(...result.data)
  }

  return results
}

function toDate(date) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`
}

async function fetch() {
  const { data: rateLimit } = await octokit.request('GET /rate_limit', {})
  console.log('rateLimit', rateLimit)

  /** @type {{ data: import('@octokit/openapi-types').components['schemas']['public-user'] }} */
  const { data: user } = await octokit.rest.users.getAuthenticated()
  console.log('user', user.login)

  /** @type {import('@octokit/openapi-types').components['schemas']['repository'][]} */
  const accessedRepos = await iterateAll(octokit.rest.repos.listForAuthenticatedUser)
  console.log('accessedRepos', accessedRepos.length)

  const ownedRepos = accessedRepos.filter(repo => repo.owner.id === user.id)
  console.log('ownedRepos', ownedRepos.length)

  const ownedPublicRepos = ownedRepos.filter(repo => repo.visibility === 'public')
  console.log('ownedPublicRepos', ownedPublicRepos.length)

  const languageUsageMap = {}
  for (const repo of ownedRepos) {
    /** @type {{ data: import('@octokit/openapi-types').components['schemas']['language'] }} */
    const { data: languages } = await octokit.rest.repos.listLanguages({
      owner: repo.owner.login,
      repo: repo.name,
    })

    for (const language of Object.keys(languages)) {
      if (!(language in languageUsageMap)) {
        languageUsageMap[language] = 0
      }

      languageUsageMap[language]++
    }
  }

  console.log('languageUsageMap', languageUsageMap)

  const { data: { total_count: commitsTotal } } = await octokit.rest.search.commits({
    q: `author:${user.login}`,
    per_page: 1,
  })

  console.log('commitsTotal', commitsTotal)

  const weekAgo = new Date()
  weekAgo.setUTCDate(weekAgo.getUTCDate() - 7)
  const { data: { total_count: commitsLastWeek } } = await octokit.rest.search.commits({
    q: `author:${user.login}+author-date:>${toDate(weekAgo)}`,
    per_page: 1,
  })

  console.log('commitsLastWeek', commitsLastWeek)

  const yearAgo = new Date()
  yearAgo.setUTCFullYear(weekAgo.getUTCFullYear() - 1)
  const { data: { total_count: commitsLastYear } } = await octokit.rest.search.commits({
    q: `author:${user.login}+author-date:>${toDate(yearAgo)}`,
    per_page: 1,
  })

  console.log('commitsLastYear', commitsLastYear)

  const { data: { total_count: solvedIssues } } = await octokit.rest.search.issuesAndPullRequests({
    q: `is:issue+is:closed+assignee:${user.login}`,
  })

  console.log('solvedIssues', solvedIssues)

  // TODO: can be optimized to avoid iterating over all of them? maybe there's a total_count somewhere here?

  /** @type {import('@octokit/openapi-types').components['schemas']['repository'][]} */
  const starredRepos = await iterateAll(octokit.rest.activity.listReposStarredByAuthenticatedUser)
  console.log('starredRepos', starredRepos.length)
  
  /** @type {import('@octokit/openapi-types').components['schemas']['repository'][]} */
  const watchedRepos = await iterateAll(octokit.rest.activity.listWatchedReposForAuthenticatedUser)
  console.log('watchedRepos', watchedRepos.length)

  let contributions = 0
  for (const repo of accessedRepos) {
    const response = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
      owner: repo.owner.login,
      repo: repo.name,
    })

    if (response.status !== 200) {
      console.log('status is not 200 for', repo.name, 'by', repo.owner.login)
      continue
    }

    /** @type {import('@octokit/openapi-types').components['schemas']['contributor'][]} */
    const contributors = response.data

    const contributor = contributors.find(contributor => contributor.id === user.id)
    if (contributor) {
      contributions += contributor.contributions
    }
  }

  console.log('contributions')

  const { data: subscriptions } = await octokit.request('GET /users/{user}/subscriptions', {
    user: user.login,
  })

  console.log('subscriptions', subscriptions.length)

  const { data: { total_count: pullRequests } } = await octokit.rest.search.issuesAndPullRequests({
    q: `is:pull-request+author:${user.login}`,
  })

  console.log('pullRequests', pullRequests)

  return {
    userId: user.id,
    username: user.login,
    company: user.company,
    location: user.location,
    profilePictureUrl: user.avatar_url,
    ownedReposList: {
      count: ownedRepos.length,
      items: ownedPublicRepos.map(repo => ({ // max: 100
        name: repo.name
      })),
    },
    languagesList: { // max: 10 languages per max: 100 repos
      count: Object.keys(languageUsageMap).length,
      items: Object.entries(languageUsageMap).sort((a, b) => b[1] - a[1]).map(([language, repos]) => ({
        language,
        repos,
      })),
    },
    commits: {
      total: commitsTotal,
      lastWeek: commitsLastWeek,
      lastYear: commitsLastYear,
    },
    solvedIssues: solvedIssues,
    followers: user.followers,
    following: user.following,
    starredRepos: starredRepos.length,
    watchedRepos: watchedRepos.length,
    // subscriptions: subscriptions.length,
    contributions: {
      // total: contributionsTotal,
      lastWeek: contributionsLastWeek,
      lastYear: contributionsLastYear,
    },
    pullRequests,
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
