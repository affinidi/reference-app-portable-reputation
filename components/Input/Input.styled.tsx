import styled from 'styled-components'

import { pxToRem } from '../../utils'
// import CalendarIcon from 'assets/svg/calendar.svg'

import Box from '../Box/Box'
import Typography from '../Typography/Typography'

export const Wrapper = styled(Box)`
  margin: ${pxToRem(24)} 0 ${pxToRem(20)};
`

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  height: ${pxToRem(48)};
  padding: ${pxToRem(13)} ${pxToRem(16)};
  border: 1px solid ${(props) => (props.$hasError ? '#e42648' : '#e0e1e5')};
  background: #fff;
  color: ${(props) => (props.$hasError ? '#e42648' : '#464e66')};
  font-family: 'Roboto', sans-serif;
  font-size: ${pxToRem(16)};
  border-radius: 4px;
  transition: all 0.125s ease-in-out;
  outline: none;
  -webkit-min-logical-width: calc(100% - 16px);

  &:not([disabled]) {
    &:hover,
    &:focus {
      border: 1px solid ${(props) => (props.$hasError ? '#e42648' : '#1a207e')};
    }

    ::placeholder {
      color: #989daa;
    }
  }

  &[disabled] {
    cursor: default;
    color: #989daa;
    border-color: #989daa;
  }

  &[type='range'] {
    -webkit-appearance: none;
    height: ${pxToRem(6)};
    padding: 0;
    background: #e0e1e5;
    border-radius: 10px;
    background-image: linear-gradient(#01f6bf, #01f6bf);
    background-size: 70% 100%;
    background-repeat: no-repeat;
    transition: none;
    border: none;

    &:hover,
    &:focus {
      border: none;
    }
  }

  /* Input Thumb */
  &[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${pxToRem(20)};
    width: ${pxToRem(20)};
    border-radius: 50%;
    background: #01f6bf;
  }

  &[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #01f6bf;
  }

  &[type='range']::-ms-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #01f6bf;
  }

  /* Input Track */
  &[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &[type='range']::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &[type='range']::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`

export const Error = styled(Typography)`
  margin-bottom: 0;
  color: #e42648;
`

export const Range = styled(Box)`
  margin: ${pxToRem(8)} 0 ${pxToRem(4)};
`
export const Label = styled(Typography)<{ $disabled?: boolean }>`
  ${(props) => (props.$disabled ? `color: #989daa;` : null)}
`
