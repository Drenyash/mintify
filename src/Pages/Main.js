import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aside from '../Components/Aside/Aside.jsx'
import Header from '../Components/Header/Header.jsx'
import MainContent from '../Components/MainContent/MainContent.jsx'
import User from '../Components/User/User.jsx'
import ErrorPage from '../Components/ErrorPage/ErrorPage.jsx'
import ProductPage from '../Components/ProductPage/ProductPage.jsx'

function Main() {
  return (
    <>
      <Header />
      <main className='main'>
        <Aside />
        <Routes>
          <Route path="/" element={<MainContent />}/>
          <Route path="/user" element={<User />}/>
          <Route path="/product" element={<ProductPage />}/>
          <Route path="/product/:id" element={<ProductPage />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </main>
    </>
  )
}

export default Main