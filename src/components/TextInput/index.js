import React from 'react'

import style from './style.css'

const TextInput = ({
  label,
  name,
  onChange,
  placeholder,
}) => (
  <label className={style.textinput}>
    {label}
    <input
      className={style.input}
      name={name}
      onChange={({ target }) => onChange(name, target.value)}
      placeholder={placeholder}
      type="text"
    />
  </label>
)

export default TextInput