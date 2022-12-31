import React from 'react'
import Aside from '../Components/Aside.jsx'
import Header from '../Components/Header.jsx'
import User from '../Components/User.jsx'

function Main() {
  return <>
    <Header />
    <main className='main'>
      <Aside />
      <User />
    </main>
  </>
}

export default Main