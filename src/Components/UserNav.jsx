import React from 'react'
import avatar from '../Assets/img/Ava.jpg'

function UserNav() {
  return (
    <div className="user-nav">
      <ul className="user-nav__list">
        <li className='user-nav__element'>
          <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0H2C1.31 0 .75.56.75 1.25v7.5C.75 9.44 1.31 10 2 10h10c.69 0 1.25-.56 1.25-1.25v-7.5C13.25.56 12.69 0 12 0Zm0 1.25v.32L7 5.458 2 1.57v-.32h10ZM2 8.75V3.152l4.616 3.591a.621.621 0 0 0 .768 0L12 3.153l.001 5.597H2Z" fill="#333"/></svg>
        </li>
        <li className='user-nav__element'>
          <svg width="14" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.875v-1.25c0-.69-.56-1.25-1.25-1.25H2.625A1.877 1.877 0 0 0 .75 2.25v7.5c0 1.376 1.121 1.875 1.875 1.875H12c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Zm-9.375-1.25h8.125v1.25H2.625a.626.626 0 0 1 0-1.25ZM12 10.375H2.633C2.343 10.367 2 10.253 2 9.75V4.01c.196.07.404.115.625.115H12v6.25Z" fill="#333"/></svg>
        </li>
      </ul>
      <div className="user">
        <div className="user__avatar">
          <img src={avatar} alt="" />
        </div>
        <h3 className="user__nickname">TakenHara</h3>
      </div>
    </div>
  )
}

export default UserNav