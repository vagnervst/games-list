import React from 'react'

import style from './style.css'

const Game = ({
  background,
  description,
  title,
  thumbnail,
}) => (
  <div
    className={style.game}
    style={{
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1) ), url(${background})`,
      backgroundSize: 'cover'
    }}
  >
    <img className={style.thumbnail} alt={title} src={thumbnail} />
    <h1 className={style.title}>{title}</h1>
    <p className={style.description}>{description + description + description}</p>
  </div>
)

export default Game