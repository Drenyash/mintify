import React, {useState} from 'react'

function Nav() {
  const [navItem, setNavItem] = useState([
    {id: 1, text: 'Dashboard', classList: 'nav__item nav__item_active'},
    {id: 2, text: 'About us', classList: 'nav__item'},
    {id: 3, text: 'FAQ', classList: 'nav__item'},
  ])
  return (
    <nav className="nav header__nav">
      {navItem.map(element => 
        <a href="/" className={element.classList} key={element.id}>{element.text}</a>  
      )}
    </nav>
  )
}

export default Nav