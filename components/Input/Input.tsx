import React, { forwardRef, InputHTMLAttributes } from "react";
import * as S from "./Input.styled";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  units?: string;
  isGroup?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, isGroup, className, units, disabled, ...props }, ref) => (
    <S.Wrapper gap={4} className={className}>
      {label && (
        <S.Label variant="p4" $disabled={disabled}>
          {label}
        </S.Label>
      )}

      {props.type === "range" && (
        <S.Range alignItems="flex-end">
          {props.value} {units}
        </S.Range>
      )}

      <S.Input
        disabled={disabled}
        $hasError={!!error}
        ref={ref}
        {...(props.type === "range" && {
          style: {
            backgroundSize: `${
              // @ts-ignore
              ((props.value - props.min) * 100) / (props.max - props.min)
            }% 100%`,
          },
        })}
        {...props}
      />

      {!isGroup && error && <S.Error variant="p3">{error}</S.Error>}
    </S.Wrapper>
  )
);
Input.displayName = "Input";
export default Input;
