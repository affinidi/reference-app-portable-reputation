import {
  ClipboardEventHandler,
  KeyboardEvent,
  useMemo,
  useRef,
  useState,
} from 'react'

import * as S from './ConfirmSignInForm.styled'

type OTPCode = Record<number, string | null>;

const CodeObjectToString = (objectCode: OTPCode) =>
  Object.values(objectCode).filter(Boolean).join('')

const CODE_LENGTH = 6
const INPUT_ELEMENTS_AMOUNT = 6

const FROM_ZERO_TO_NINE = Array(10)
  .fill(undefined)
  .map((_, idx) => idx.toString())

export const useConfirmSignInForm = (message?: string) => {
  const [verifyCode, setVerifyCode] = useState<OTPCode>({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  })

  const computedCode = useMemo(
    () => CodeObjectToString(verifyCode),
    [verifyCode]
  )

  const refInputs = Array.from({ length: INPUT_ELEMENTS_AMOUNT }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLInputElement>(null)
  )

  const partialUpdate = (newState: OTPCode) =>
    setVerifyCode((prev: OTPCode) => {
      return { ...prev, ...newState }
    })

  const onKeyDown = (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
    const isBackspacePressed = e.key === 'Backspace'
    const isArrowLeft = e.key === 'ArrowLeft'
    const isArrowRight = e.key === 'ArrowRight'

    if (isBackspacePressed) {
      if (index !== 0) {
        refInputs[index - 1].current?.focus()
      }

      partialUpdate({ [index]: null })
    } else if (isArrowRight || isArrowLeft) {
      const nextIndex = isArrowRight ? index + 1 : index - 1

      if (nextIndex >= 0 && nextIndex < INPUT_ELEMENTS_AMOUNT) {
        refInputs[nextIndex].current?.focus()
      }
    } else {
      if (!FROM_ZERO_TO_NINE.includes(e.key)) return

      if (index !== INPUT_ELEMENTS_AMOUNT - 1) {
        refInputs[index + 1].current?.focus()
      }

      partialUpdate({ [index]: e.key })
    }
  }

  const onPaste: ClipboardEventHandler<HTMLInputElement> = (e) => {
    const pastedText = e.clipboardData.getData('text')?.split('')
    const firstSix = pastedText.slice(0, INPUT_ELEMENTS_AMOUNT)
    const verifyCodePasted = firstSix.reduce(
      (acc, curr, idx) => ({
        ...acc,
        [idx]: curr,
      }),
      {}
    )

    partialUpdate(verifyCodePasted)
    refInputs[firstSix.length - 1].current?.focus()
  }

  const isButtonDisabled = computedCode.length < CODE_LENGTH

  const inputs = Array.from({ length: INPUT_ELEMENTS_AMOUNT }, (_, index) => {
    return (
      <S.VerificationField
        onChange={() => ({})}
        value={verifyCode[index] || ''}
        onPaste={onPaste}
        key={index}
        className={index.toString()}
        autoFocus={index === 0}
        type="text"
        ref={refInputs[index]}
        hasError={Boolean(message)}
        maxLength={1}
        onKeyDown={onKeyDown(index)}
      />
    )
  })

  return {
    computedCode,
    inputs,
    isButtonDisabled,
  }
}
