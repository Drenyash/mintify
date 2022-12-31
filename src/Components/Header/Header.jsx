import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/img/logo.svg'
import Nav from '../Nav/Nav'
import Search from '../../UI/Search/Search'
import UserNav from '../UserNav/UserNav'
import style from './Header.module.scss'

function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__col}>
        <div className="logo">
          <Link to="/">
            <img src={logo} style={{marginRight: 150}} alt="Mintify Маркетплэйс по продаже NFT" />
          </Link>
        </div>
        <Nav />
      </div>
      <div className={style.header__col}>
        <Search />
        <UserNav />
      </div>

    </header>
  )
}

export default Header