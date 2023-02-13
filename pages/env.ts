// shared envs for frontend and backend

export const hostUrl = process.env.NEXT_PUBLIC_HOST

export const requireEnvs = () => {
    const names: string[] = [
      'PROJECT_ID',
      'PROJECT_DID',
      'API_KEY_HASH',
      'GITHUB_APP_CLIENT_ID',
      'GITHUB_APP_CLIENT_SECRET',
    ]
  
    const missingEnvs: string[] = names.filter((name) => !process.env[name])
    if (missingEnvs.length !== 0) {
      throw new Error(
         'Required envs are not provided, please read README file'
      )
    }
  }


  requireEnvs()