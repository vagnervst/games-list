import React from 'react'

import style from './style.css'

const SidebarOption = ({ title }) => (
  <a className={style.sidebarItem}>{title}</a>
)

const Sidebar = ({ children, items }) => (
  <div className={style.sidebar}>
    { children &&
      <div className={style.content}>
        {children}
      </div>
    }
    <nav>
      <ul className={style.menu}>
        {items.map(({ title }) => (
          <li><SidebarOption title={title} /></li>
        ))}
      </ul>
    </nav>
  </div>
)

export default Sidebar