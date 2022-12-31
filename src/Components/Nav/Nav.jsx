import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.scss'

function Nav() {
  const [navItem, setNavItem] = useState([
    {id: 1, text: 'Dashboard', url: '/', classList: style.nav__item},
    {id: 2, text: 'About us', url: '/about', classList: style.nav__item},
    {id: 3, text: 'FAQ', url: '/faq', classList: style.nav__item},
  ])
  const activeElem = style.nav__item_active
  return (
    <nav className={style.nav}>
      {navItem.map(element => 
        <NavLink to={element.url} key={element.id} className={({isActive}) => isActive ? element.classList + " " + activeElem : element.classList}>{element.text}</NavLink>
      )}
    </nav>
  )
}

export default Nav