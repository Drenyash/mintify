import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Aside from '../Components/Aside/Aside.jsx'
import Header from '../Components/Header/Header.jsx'
import MainContent from '../Components/MainContent/MainContent.jsx'
import User from '../Components/User/User.jsx'
import ErrorPage from '../Components/ErrorPage/ErrorPage.jsx'
import ProductPage from '../Components/ProductPage/ProductPage.jsx'

function Main() {
  const [element, setElement] = useState('')
  
  const getElement = (element) => {
    const createElement = {
      id: element.id, 
      img: element.pic, 
      title: element.title, 
      author: element.author, 
      type: element.type, 
      price: element.price, 
      crypto: element.crypto
    }
    setElement(createElement);
  }
  return (
    <>
      <Header />
      <main className='main'>
        <Aside />
        <Routes>
          <Route path="/" element={<MainContent getElement={getElement}/>}/>
          <Route path="/user" element={<User />}/>
          <Route path="/product/:id" element={<ProductPage element={element}/>}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </main>
    </>
  )
}

export default Main