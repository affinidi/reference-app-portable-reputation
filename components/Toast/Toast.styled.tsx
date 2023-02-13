import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { pxToRem } from 'utils'
import { theme } from 'utils/theme'

import Typography from '../Typography/Typography'

export const Container = styled(ToastContainer)`
  --toastify-color-dark: ${theme.colors.neutral.primary['100']};
  --toastify-toast-width: ${pxToRem(328)};
  --toastify-toast-min-height: ${pxToRem(48)};
  --toastify-z-index: 999999;
  --toastify-text-color-dark: ${theme.colors.neutral.secondary['100']};

  .Toastify__toast-theme--dark {
    &.Toastify__toast {
      padding: 0 ${pxToRem(10)};
    }
  }

  .Toastify__toast-body {
    align-items: flex-start;
    padding: ${pxToRem(14)};
  }

  .Toastify__toast-icon {
    margin-right: ${pxToRem(12)};
  }
`

export const Message = styled(Typography)`
  cursor: inherit;
  color: ${() => theme.colors.neutral.secondary['100']};
`
