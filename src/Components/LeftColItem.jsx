import React from 'react'

function LeftColItem({children}) {
  return (
    <li className="left-col__item">
      {children}
      <svg width="12" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.333 1.75 6 6.417l4.667-4.667" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </li>
  )
}

export default LeftColItem