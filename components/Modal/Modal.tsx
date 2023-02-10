import React from 'react'
import { ModalProps as ReactModalProps } from 'react-responsive-modal'

import Typography from '../Typography/Typography'

import * as S from './Modal.styled'

export type ModalProps = {
  useLocalContainer?: boolean;
  useRelativePosition?: boolean;
  title?: string;
  footer?: React.ReactElement;
  position?: 'rightSide' | 'center';
} & ReactModalProps;

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  footer,
  position = 'center',
  onClose,
  ...rest
}) => {
  const modalAnimationIn =
    position === 'rightSide' ? 'slideFromRightIn' : 'zoomIn'
  const modalAnimationOut =
    position === 'rightSide' ? 'slideFromRightOut' : 'zoomOut'

  return (
    <S.Modal
      {...rest}
      onClose={onClose}
      $position={position}
      showCloseIcon={false}
      focusTrapped={false}
      classNames={{
        root: 'root',
        overlay: 'overlay',
        modal: 'modal',
        container: 'container',
        modalAnimationIn,
        modalAnimationOut,
      }}
    >
      {rest.open && (
        <>
          {title && (
            <>
              <S.Title
                alignItems="center"
                justifyContent="space-between"
                gap={24}
              >
                <Typography variant="l1">{title}</Typography>
              </S.Title>
            </>
          )}

          <S.Content>{children}</S.Content>

          {footer && (
            <S.Footer
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {footer}
            </S.Footer>
          )}
        </>
      )}
    </S.Modal>
  )
}

export default Modal
