import styled, { css } from 'styled-components'

import { pxToRem } from 'utils'

import { AlignText, Variant } from './types'

export const Typography = styled.p<{
  $variant: Variant;
  $align?: AlignText;
  $ellipsis?: boolean;
  $ellipsisLines: number;
}>`
  margin: 0;
  text-decoration: none;

  ${({ $align }) =>
    $align &&
    css`
      text-align: ${$align};
    `}

  font-size: ${(props) => {
    switch (props.$variant) {
      case 'h1':
        return pxToRem(88)
      case 'h2':
        return pxToRem(56)
      case 'h3':
        return pxToRem(40)
      case 'h4':
        return pxToRem(32)
      case 'h5':
        return pxToRem(28)
      case 'h6':
        return pxToRem(20)
      case 'b1':
      case 'p0':
        return pxToRem(18)
      case 'p5':
      case 'l2':
      case 'l4':
      case 'o1':
      case 's2':
      case 'e1':
      case 'p2':
        return pxToRem(14)
      case 'h8':
      case 'p6':
      case 'c1':
      case 's3':
      case 'p3':
        return pxToRem(12)

      default:
        return pxToRem(16)
    }
  }};

  line-height: ${(props) => {
    switch (props.$variant) {
      case 'h1':
        return pxToRem(104)
      case 'h2':
        return pxToRem(72)
      case 'h3':
        return pxToRem(48)
      case 'h4':
        return pxToRem(40)
      case 'h5':
        return pxToRem(36)
      case 'h6':
        return pxToRem(28)
      case 'p1':
        return pxToRem(22)
      case 'b1':
      case 'p0':
      case 'b2':
      case 's1':
        return pxToRem(24)
      case 'h8':
        return pxToRem(16)
      case 's3':
        return pxToRem(12)

      default:
        return pxToRem(20)
    }
  }};

  font-family: ${(props) => {
    switch (props.$variant) {
      case 'p1':
      case 'p2':
      case 'p3':
      case 'p4':
      case 'p5':
      case 'p6':
      case 'p7':
      case 'p8':
      case 'e1':
        return '\'Nunito Sans\', sans-serif'

      default:
        return '\'Montserrat\', sans-serif'
    }
  }};

  font-weight: ${(props) => {
    switch (props.$variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'h7':
      case 'h8':
      case 'p4':
      case 'p5':
      case 'p6':
      case 'p7':
      case 'p8':
        return '700'
      case 'b1':
      case 'b2':
      case 'l1':
      case 'l2':
      case 'l3':
      case 'l4':
        return '600'
      case 'c1':
        return '500'

      default:
        return '400'
    }
  }};

  letter-spacing: ${(props) => {
    switch (props.$variant) {
      case 'h1':
        return '-2px'
      case 'h2':
        return '-1px'
      case 'h3':
        return '-0.4px'
      case 'h4':
      case 'h5':
      case 'h6':
      case 's3':
        return '-0.2px'
      case 's1':
      case 'c1':
        return '0.4px'
      case 's2':
      case 'p0':
      case 'p1':
      case 'p2':
      case 'p3':
      case 'p4':
      case 'p5':
      case 'p6':
      case 'p7':
      case 'p8':
      case 'e1':
        return '0.2px'
      case 'b1':
      case 'b2':
        return '1px'
      case 'o1':
        return '1.4px'

      default:
        return 'normal'
    }
  }};

  color: ${(props) => {
    switch (props.$variant) {
      case 'l1':
        return props.theme.colors.brand.secondary['100']
      case 'e1':
        return props.theme.colors.utility.danger['100']

      default:
        return props.theme.colors.neutral.secondary['100']
    }
  }};

  cursor: ${(props) => {
    switch (props.$variant) {
      case 'l1':
      case 'l2':
        return 'pointer'

      default:
        return 'default'
    }
  }};

  text-transform: ${(props) => {
    switch (props.$variant) {
      case 'b1':
      case 'b2':
      case 'c1':
      case 'o1':
      case 'l1':
      case 'l2':
        return 'uppercase'

      default:
        return 'none'
    }
  }};
`
