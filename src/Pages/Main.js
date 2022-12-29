import React from 'react'
import Aside from '../Components/Aside.jsx'
import Header from '../Components/Header.jsx'
import MainContent from '../Components/MainContent.jsx'

function Main() {
  return <>
    <Header />
    <main className='main'>
      <Aside />
      <MainContent />
    </main>
  </>
}

export default Main