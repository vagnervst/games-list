import React from 'react'

import style from './style.css'

const Button = ({ children, onClick }) => (
  <button
    className={style.button}
    onClick={onClick}
  >
      {children}
  </button>
)

export default Button