import styled, { css, keyframes } from 'styled-components'

import { pxToRem } from 'utils'

import Typography from '../Typography/Typography'

import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  getBackgroundColor,
  getBorder,
  getColor,
  getPadding,
} from './Button.themes'

interface StyledButtonProps {
  $color: ButtonColor;
  $variant: ButtonVariant;
  $size: ButtonSize;
  $hasIcon: boolean;
  $iconButton?: boolean;
  $loading?: boolean;
  $fullWidth?: boolean;
}

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const SpinnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  svg {
    display: block;
    animation: ${rotate} 1.5s linear infinite;
  }
`

export const IconWrapper = styled.div<Pick<StyledButtonProps, '$loading'>>`
  opacity: ${(props) => (props.$loading ? '0' : '1')};

  svg {
    display: block;
    max-height: ${pxToRem(20)};
    max-width: ${pxToRem(20)};
  }
`

export const Button = styled.button<StyledButtonProps>`
  position: relative;
  display: flex;
  gap: ${pxToRem(12)};
  align-items: center;
  justify-content: center;
  padding: ${(props) => getPadding(props.$size, props.$hasIcon)};
  background-color: ${(props) =>
    getBackgroundColor(props.$variant, props.$color, 'default')};
  border: 2px solid
    ${(props) => getBorder(props.$variant, props.$color, 'default')};
  border-radius: 48px;
  box-sizing: border-box;
  color: ${(props) => getColor(props.$variant, props.$color, 'default')};
  cursor: pointer;
  transition: all 0.125s ease-in-out;

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
  path {
    fill: ${(props) => getColor(props.$variant, props.$color, 'default')};
  }

  &._hover,
  &:hover {
    background-color: ${(props) =>
      getBackgroundColor(props.$variant, props.$color, 'hover')};
    border-color: ${(props) =>
      getBorder(props.$variant, props.$color, 'hover')};
    color: ${(props) => getColor(props.$variant, props.$color, 'hover')};

    path {
      fill: ${(props) => getColor(props.$variant, props.$color, 'hover')};
    }
  }

  &._active,
  &:active {
    background-color: ${(props) =>
      getBackgroundColor(props.$variant, props.$color, 'active')};
    border-color: ${(props) =>
      getBorder(props.$variant, props.$color, 'active')};
    color: ${(props) => getColor(props.$variant, props.$color, 'active')};

    path {
      fill: ${(props) => getColor(props.$variant, props.$color, 'active')};
    }
  }

  &[disabled] {
    background-color: ${(props) =>
      getBackgroundColor(props.$variant, props.$color, 'disabled')};
    border-color: ${(props) =>
      getBorder(props.$variant, props.$color, 'disabled')};
    color: ${(props) => getColor(props.$variant, props.$color, 'disabled')};
    cursor: not-allowed;

    path {
      fill: ${(props) => getColor(props.$variant, props.$color, 'disabled')};
    }
  }

  ${(props) =>
    props.$iconButton &&
    css`
      height: ${pxToRem(48)};
      width: ${pxToRem(48)};
    `}

  ${(props) =>
    props.$loading &&
    css`
      background-color: ${getBackgroundColor(
        props.$variant,
        props.$color,
        'loading'
      )};
      border-color: ${getBorder(props.$variant, props.$color, 'loading')};
      color: ${getColor(props.$variant, props.$color, 'loading')};
      cursor: not-allowed;

      path {
        fill: ${getColor(props.$variant, props.$color, 'loading')};
      }
    `}
`

export const Content = styled(Typography)<
  Pick<StyledButtonProps, '$loading' | '$iconButton'>
>`
  opacity: ${(props) => (props.$loading ? '0' : '1')};
  color: inherit;
  cursor: inherit;

  ${(props) =>
    props.$iconButton &&
    css`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      svg {
        display: block;
        max-width: ${pxToRem(20)};
        max-height: ${pxToRem(20)};
      }
    `};
`
