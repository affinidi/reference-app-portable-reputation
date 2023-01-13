import { FC } from 'react'

import * as S from './Spinner.styled'

type SpinnerProps = {
  width?: number
  height?: number
}

const Spinner: FC<SpinnerProps> = ({ width = 50, height = 50 }) => (
  <S.Spinner $width={width} $height={height} />
)

export default Spinner
