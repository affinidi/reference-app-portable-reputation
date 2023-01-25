import React, { useRef } from "react";

import Typography from "../Typography/Typography";
import { ModalProps as ReactModalProps } from "react-responsive-modal";
import * as S from "components/Modal/Modal.styled";
import Button from "components/Button/Button";
import Box from "components/Box/Box";
import IconCheck from "public/images/iconCheck";

export type ModalProps = {
  useLocalContainer?: boolean;
  useRelativePosition?: boolean;
  title?: string;
  icon: React.ReactElement;
  access: string;
  footer: React.ReactElement;
} & ReactModalProps;

const Modal: React.FC<ModalProps> = ({
  title,
  icon,
  useLocalContainer = false,
  children,
  access,
  footer,
  useRelativePosition = false,
  ...rest
}) => {
  const containerRef = useRef(null);

  return (
    <>
      {useLocalContainer && <div ref={containerRef} />}

      <S.Modal
        {...rest}
        {...(useLocalContainer && {
          container: containerRef.current,
        })}
        // $position={position}
        $useRelativePosition={useRelativePosition}
        showCloseIcon={false}
        focusTrapped={false}
        classNames={{
          root: "root",
          overlay: "overlay",
          modal: "modal",
          container: "container",
        }}
      >
        {title && (
          <S.Title alignItems="center" justifyContent="space-between" gap={24}>
            <Typography variant="l1">{title}</Typography>
          </S.Title>
        )}

        {icon && (
          <S.Icon direction="row" justifyContent="center">
            {icon}
          </S.Icon>
        )}

        <S.Content flex={1} justifyContent="flex-end">
          {children}
        </S.Content>

        {access && (
          <S.AccessContainer alignItems="flex-start" gap={17}>
            <Typography variant="o1">This will allow DApp to:</Typography>
            <S.AccessIconContainer>
              <Typography variant="p1">
                <IconCheck />
                {access}
              </Typography>
            </S.AccessIconContainer>
          </S.AccessContainer>
        )}
        <S.Footer
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button variant="ghost" onClick={rest.onClose}>
            Cancel
          </Button>
          {footer}
        </S.Footer>
      </S.Modal>
    </>
  );
};

export default Modal;
