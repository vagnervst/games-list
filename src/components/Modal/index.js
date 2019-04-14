import React, { Fragment } from 'react'

import style from './style.css'

const ModalOverlay = ({ children }) => (
  <div className={style.overlay}>{children}</div>
)

const Modal = ({
  children,
  visible,
}) => (
  <Fragment>
    {visible &&
      <ModalOverlay>
        <div className={style.modal}>
          {children}
        </div>
      </ModalOverlay>
    }
  </Fragment>
)

export default Modal
