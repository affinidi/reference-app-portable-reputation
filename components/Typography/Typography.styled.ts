import styled, { css } from 'styled-components'

import { pxToRem } from '../../utils'

import { AlignText, Variant } from './types'

// eslint-disable-next-line import/prefer-default-export
export const Typography = styled.p<{
  $variant: Variant
  $align?: AlignText
  $ellipsis?: boolean
  $ellipsisLines: number
}>`
  ${({ $align }) =>
    $align &&
    css`
      text-align: ${$align};
    `}

  ${({ $ellipsisLines }) => {
    if ($ellipsisLines > 1) {
      return css`
        text-overflow: ellipsis;
        overflow: hidden;
        // Addition lines for 2 line or multiline ellipsis
        display: -webkit-box !important;
        -webkit-line-clamp: ${$ellipsisLines};
        -webkit-box-orient: vertical;
        white-space: normal;
      `
    }

    if ($ellipsisLines === 1) {
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `
    }

    return undefined
  }}

  margin: ${(props) => {
    switch (props.$variant) {
      case 'h1':
      case 'p2':
      case 'p4':
      case 's2':
      case 's3':
      case 'h5':
      case 'h6':
      case 'h7':
        return '0'
      case 'c1':
        return `0 0 ${pxToRem(8)}`
      case 'p1':
      default:
        return `0 0 ${pxToRem(24)}`
    }
  }};

  line-height: ${(props) => {
    switch (props.$variant) {
      case 'h1':
      case 'h5':
        return pxToRem(36)
      case 'h6':
        return pxToRem(28)
      case 'h7':
      case 'p2':
      case 'p3':
      case 'b3':
      case 'c1':
      case 's2':
      case 'e1':
        return pxToRem(20)
      case 's3':
        return pxToRem(12)
      case 'p1':
      default:
        return pxToRem(22)
    }
  }};

  font-family: ${(props) => {
    switch (props.$variant) {
      case 'h1':
      case 'h5':
      case 'h6':
      case 'h7':
      case 'c1':
      case 's2':
      case 's3':
      case 'b3':
      case 'b2':
        return "'Montserrat', sans-serif"
      case 'b1':
        return "'Poppins', sans-serif"
      default:
        return "'Nunito Sans', sans-serif"
    }
  }};

  font-weight: ${(props) => {
    switch (props.$variant) {
      case 'h1':
      case 'h5':
      case 'h6':
      case 'h7':
      case 'p4':
        return '700'
      case 'b1':
      case 'b3':
        return '600'
      case 'b2':
      case 'c1':
        return '500'
      default:
        return '400'
    }
  }};

  font-size: ${(props) => {
    switch (props.$variant) {
      case 'b1':
      case 'b2':
      case 'c1':
        return pxToRem(10)
      case 'h1':
      case 'h5':
        return pxToRem(28)
      case 'p3':
      case 'b3':
      case 's3':
        return pxToRem(12)
      case 'p2':
      case 's2':
      case 'e1':
        return pxToRem(14)
      case 'h6':
        return pxToRem(20)
      case 'h7':
      case 'p1':
      default:
        return pxToRem(16)
    }
  }};

  letter-spacing: ${(props) => {
    switch (props.$variant) {
      case 'h1':
      case 'h5':
      case 'h6':
      case 's3':
        return '-0.2px'
      case 'p2':
      case 'p3':
      case 'p4':
      case 's2':
      case 'e1':
        return '0.2px'
      case 'p1':
      default:
        return '0.4px'
    }
  }};

  color: ${(props) => {
    switch (props.$variant) {
      case 'e1':
        return '#e73c5b'
      case 'h1':
      case 'h6':
      case 'p1':
      case 'p2':
      case 'p4':
        return '#fff'
      case 'b2':
        return '#989daa'
      default:
        return '#464e66'
    }
  }};
`
