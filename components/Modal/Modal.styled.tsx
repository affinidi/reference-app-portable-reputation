import React from "react";
import { Modal as ReactModal } from "react-responsive-modal";
import styled from "styled-components";

import { pxToRem } from "utils";
import { theme } from "components/utils/theme";

import Button from "../Button/Button";
import Box from "../Box/Box";

import { ModalProps } from "./Modal";

export const Modal = styled(({ classNames, className, $position, ...rest }) => (
  <ReactModal
    {...rest}
    classNames={{ ...classNames, root: `${className} ${classNames.root}` }}
  />
))<{
  $useRelativePosition: ModalProps["useRelativePosition"];
}>`
  &.root {
    position: ${({ $useRelativePosition }) =>
      $useRelativePosition ? "absolute" : "fixed"};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .overlay {
    position: ${({ $useRelativePosition }) =>
      $useRelativePosition ? "absolute" : "fixed"};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: rgba(111, 117, 136, 0.5);
    mix-blend-mode: multiply;
  }

  .react-responsive-modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  @keyframes react-responsive-modal-overlay-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes react-responsive-modal-overlay-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${pxToRem(552)};
    width: ${pxToRem(456)};
    background-color: ${({ theme }) => theme.colors.neutral.primary[100]};
  }
`;

export const Title = styled(Box)`
  padding: ${pxToRem(12)} ${pxToRem(28)};
`;

export const Icon = styled(Box)`
  width: 100%;
  padding-top: ${pxToRem(40)};
  padding-bottom: ${pxToRem(50)};
`;

export const Content = styled(Box)`
  padding: 0 ${pxToRem(28)};
  overflow-y: auto;
`;

export const CancelButton = styled(Button)`
  border: 3px solid ${({ theme }) => theme.colors.neutral.primary[100]};
  background-color: ${({ theme }) => theme.colors.neutral.primary[100]};
  color: ${({ theme }) => theme.colors.brand.secondary[100]};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.neutral.primary[100]};
    border: 3px solid ${({ theme }) => theme.colors.neutral.primary[100]};
  }
`;

export const Footer = styled(Box)`
  width: 100%;
  padding: 0 ${pxToRem(28)};

  button {
    margin-top: 0;
    cursor: pointer;
  }
`;
