import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { toast } from 'components'

const GithubErrorNotification = () => {
  const { query } = useRouter()

  useEffect(() => {
    if (query?.error_description && typeof query?.error_description === 'string') {
      toast(query.error_description, {
        type: 'error',
        autoClose: 10000
      })
    }
  }, [query])

  return null
}

export default GithubErrorNotification
