import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { toast } from 'components'
import { showErrorToast } from 'utils/errorToast'

const GithubErrorNotification = () => {
  const { query } = useRouter()

  useEffect(() => {
    if (query?.error_description) {
      if (typeof query?.error_description === 'string') {
        showErrorToast(new Error(query.error_description))
      }
      else {
        showErrorToast(new Error('Your profile couldn’t be connected.'))
      }
    }
  }, [query])

  return null
}

export default GithubErrorNotification
