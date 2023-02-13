import Image from 'next/image'
import React from 'react'
import { toast as reactToast, ToastContainerProps, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import wardingFilledIcon from 'public/images/icon-warning-filled.svg'
import closeFilledIcon from 'public/images/icon-close-filled.svg'
import infoIcon from 'public/images/icon-info-filled.svg'
import checkCircleFilledIcon from 'public/images/icon-check-circle-filled.svg'

import * as S from './Toast.styled'

const Icons = {
  info: <Image src={infoIcon} alt="Info" />,
  warning: <Image src={wardingFilledIcon} alt="Warning" />,
  error: <Image src={closeFilledIcon} alt="Error" />,
  success: <Image src={checkCircleFilledIcon} alt="Success" />,
  default: <Image src={infoIcon} alt="Success" />,
}

export interface ToastProps extends ToastOptions {
  children: React.ReactNode
}

export const ToastsContainer: React.FC<ToastContainerProps> = (props) => (
  <S.Container theme="dark" closeButton={false} {...props} />
)

const ToastLayout: React.FC<ToastProps> = ({ children }) => (
  <S.Message variant="p2" tag="div">
    {children}
  </S.Message>
)

export const toast = (message: string, { type, ...restProps }: Omit<ToastProps, 'children'>) => {
  if (type) {
    return reactToast(<ToastLayout>{message}</ToastLayout>, {
      icon: () => Icons[type],
      hideProgressBar: true,
      type,
      ...restProps,
    })
  }

  return reactToast(message, { ...restProps, type })
}
