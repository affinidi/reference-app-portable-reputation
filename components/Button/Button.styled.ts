/* eslint-disable indent */
import styled, { css } from "styled-components";
import { pxToRem } from "../../utils";

import { Variant } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button<{ $variant: Variant; $round: boolean }>`
  height: ${pxToRem(48)};
  padding: 0 ${pxToRem(19)};
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(24)};
  border-radius: 48px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin: ${pxToRem(40)} 0;

  ${({ $round }) =>
    $round &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${pxToRem(48)};
      padding: 0;
    `}

  background: ${(props) => {
    switch (props.$variant) {
      case "outlined":
        return "#fff";
      case "ghost":
        return "#313a55";
      default:
        return "#6af6ff";
    }
  }};

  border-color: ${(props) => {
    switch (props.$variant) {
      case "ghost":
        return "#313a55";
      case "outlined":
        return "#000770";
      default:
        return "#6af6ff";
    }
  }};

  color: ${(props) => {
    switch (props.$variant) {
      case "ghost":
        return "#6af6ff";
      case "outlined":
        return "#000770";
      default:
        return "#313a55";
    }
  }};

  svg {
    display: block;
  }

  &:disabled {
    cursor: default;

    background: ${(props) => {
      switch (props.$variant) {
        case "ghost":
          return "#c1c4cc";
        case "outlined":
          return "#fff";
        default:
          return "#c1c4cc";
      }
    }};

    border-color: ${(props) => {
      switch (props.$variant) {
        case "ghost":
          return "#c1c4cc";
        case "outlined":
          return "#e0e1e5";
        default:
          return "#c1c4cc";
      }
    }};

    color: ${(props) => {
      switch (props.$variant) {
        case "ghost":
          return "#fff";
        case "outlined":
          return "#e0e1e5";
        default:
          return "#fff";
      }
    }};
  }

  &:hover:not(:disabled) {
    background: ${(props) => {
      switch (props.$variant) {
        case "ghost":
          return "#313a55";
        case "outlined":
          return "#d9daea";
        default:
          return "#97f9ff";
      }
    }};

    border-color: ${(props) => {
      switch (props.$variant) {
        case "ghost":
          return "#313a55";
        case "outlined":
          return "#4c519b";
        default:
          return "#97f9ff";
      }
    }};
  }
`;
