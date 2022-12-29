import React from 'react'
import logo from '../Assets/img/logo.svg'
import Nav from './Nav'
import Search from './UI/Search/Search'
import UserNav from './UserNav'

function Header() {
  return (
    <header className="header">
      <div className="header__col">
        <div className="logo">
          <a href="">
            <img src={logo} style={{marginRight: 150}} alt="Mintify Маркетплэйс по продаже NFT" />
          </a>
        </div>
        <Nav />
      </div>
      <div className="header__col">
        <Search />
        <UserNav />
      </div>

    </header>
  )
}

export default Header