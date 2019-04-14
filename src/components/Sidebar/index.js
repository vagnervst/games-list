import React from 'react'

import style from './style.css'

const SidebarOption = ({
  game,
  onClick,
}) => (
  <button
    className={style.sidebarItem}
    onClick={() => onClick(game)}
  >{game.title}</button>
)

const Sidebar = ({
  children,
  items,
  onItemClick,
}) => (
  <div className={style.sidebar}>
    { children &&
      <div className={style.content}>
        {children}
      </div>
    }
    <nav>
      <ul className={style.menu}>
        {items.map(game => (
          <li key={game.id}>
            <SidebarOption
              game={game}
              onClick={onItemClick}
            />
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

export default Sidebar