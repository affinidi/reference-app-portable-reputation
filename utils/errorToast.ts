import { toast } from 'components'

export const showErrorToast = (error: any) => {
  const message =
    error.response?.status === 500 || !error.message
      ? 'Unexpected error, please try again'
      : error.message

  toast(message, {
    theme: 'dark',
    type: 'error',
    hideProgressBar: true,
    position: 'top-right',
    style: {
      top: '60px',
    },
  })
}
