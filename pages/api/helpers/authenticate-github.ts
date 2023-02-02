import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'
import { ApiError } from '../api-error'

export async function authenticateGithub(req: NextApiRequest): Promise<string> {
  const session = await getSession({ req })
  const githubAccessToken = session?.githubAccessToken

  if (!githubAccessToken) {
    throw new ApiError({
      code: 'GITHUB_NOT_AUTHENTICATED',
      message: 'Github access token is not present in the cookies',
      httpStatusCode: 401,
    })
  }

  return githubAccessToken
}
