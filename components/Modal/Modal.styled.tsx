import React from 'react'
import { Modal as ReactModal } from 'react-responsive-modal'
import styled, { css } from 'styled-components'

import { pxToRem } from 'utils'

import Box from '../Box/Box'

import { ModalProps } from './Modal'

const slideFromRightKeyframe = css`
  @keyframes slideFromRightIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideFromRightOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
`

const zoomInKeyframe = css`
  @keyframes zoomIn {
    0% {
      transform: scale(0.96);
      opacity: 0;
    }
    100% {
      transform: scale(100%);
      opacity: 1;
    }
  }

  @keyframes zoomOut {
    0% {
      transform: scale(100%);
      opacity: 1;
    }
    100% {
      transform: scale(0.96);
      opacity: 0;
    }
  }
`

export const Modal = styled(({ classNames, className, $position, ...rest }) => (
  <ReactModal
    {...rest}
    classNames={{ ...classNames, root: `${className} ${classNames.root}` }}
  />
))<{
  $useRelativePosition: ModalProps['useRelativePosition'];
}>`
  &.root {
    position: fixed;
    top: ${pxToRem(64)};
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    @media (min-width: 1024px) {
      top: ${pxToRem(72)};
    }
  }

  .overlay {
    position: fixed;
    top: ${pxToRem(64)};
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: ${(props) => props.theme.colors.brand.primary['100']};
    opacity: 0.5;

    @media (min-width: 1024px) {
      top: ${pxToRem(72)};
    }
  }

  .react-responsive-modal-container {
    display: flex;
    justify-content: ${({ $position }) =>
      $position === 'rightSide' ? 'flex-end' : 'center'};
    align-items: ${({ $position }) =>
      $position === 'rightSide' ? 'normal' : 'center'};
    height: 100%;
  }

  @keyframes react-responsive-modal-overlay-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }

  @keyframes react-responsive-modal-overlay-out {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }

  // NOTE: https://github.com/pradel/react-responsive-modal/issues/495
  .react-responsive-modal-overlay,
  .react-responsive-modal-container,
  .react-responsive-modal-modal {
    animation-fill-mode: forwards !important;
  }

  ${({ $position }) => {
    if ($position === 'rightSide') {
      return slideFromRightKeyframe
    }

    return zoomInKeyframe
  }}
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 100%;
    background: ${(props) => props.theme.colors.brand.primary['100']};

    ${({ $position }) => {
      if ($position === 'rightSide') {
        return css`
          width: ${pxToRem(524)};
          height: 100%;
        `
      }

      return css`
        height: ${pxToRem(552)};
        width: ${pxToRem(456)};
        max-width: unset;

        @media (max-width: 576px) {
          width: ${pxToRem(328)};
        }
      `
    }}
  }
`

export const Title = styled(Box)`
  padding: ${pxToRem(12)} ${pxToRem(28)};
`

export const CloseButton = styled.div`
  position: absolute;
  top: ${pxToRem(24)};
  right: ${pxToRem(100)};
  cursor: pointer;

  @media (max-width: 1024px) {
    right: ${pxToRem(24)};
  }
`

export const Content = styled(Box)`
  overflow-y: auto;
`

export const Footer = styled(Box)`
  width: 100%;
  padding: 0 ${pxToRem(28)};

  button {
    margin-top: 0;
    cursor: pointer;
  }
`
