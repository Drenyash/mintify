import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import NFT from '../NFT/NFT'
import Sort from '../Sort/Sort'
import pic from '../../Assets/img/nft/1.jpg'
import style from './MainContent.module.scss'
import Button from '../../UI/Button/Button'

function MainContent() {
  const [nft, setNft] = useState([
    {id: 1, img: pic, title: 'The Holy Grail', author: 'Pixart Motion', type: 'Fixed price', price: 0.001, crypto: 'ETH'},
    {id: 2, img: pic, title: 'Shit', author: 'Pixart Motion', type: 'Fixed price', price: 0.001, crypto: 'ETH'},
    {id: 3, img: pic, title: 'The Holy Grail', author: 'Pixart Motion', type: 'Fixed price', price: 1.321, crypto: 'ETH'},
    {id: 4, img: pic, title: 'The Holy Grail', author: 'Pixart Motion', type: 'Fixed price', price: 0.001, crypto: 'ETH'},
    {id: 5, img: pic, title: 'The Holy Grail', author: 'Pixart Motion', type: 'Fixed price', price: 0.001, crypto: 'BTC'},
    {id: 6, img: pic, title: 'The Holy Grail', author: 'Pixart Motion', type: 'Fixed price', price: 0.001, crypto: 'BTC'},
    {id: 7, img: pic, title: 'The Holy Grail', author: 'Pixart Motion', type: 'Fixed price', price: 0.001, crypto: 'BTC'},
    {id: 8, img: pic, title: 'The Holy Grail', author: 'Pixart Motion', type: 'Fixed price', price: 0.001, crypto: 'BTC'},
    {id: 9, img: pic, title: 'The Holy Grail', author: 'Pixart Motion', type: 'Fixed price', price: 0.001, crypto: 'BTC'},
    {id: 10, img: pic, title: 'The Holy Grail', author: 'Pixart Motion', type: 'Fixed price', price: 0.001, crypto: 'BTC'},
  ])
  return (
    <section className={style.content}>
      <div className={style.content__header}>
        <div className={style.content__top}>
          <h1 className={style.content__title}>Cryptographics</h1>
          <Button>Create new item</Button>
        </div>
        <Sort />
      </div>
      <div className={style.content__list}>
        {nft.map(element => 
          <NavLink to={`/product/${element.id}`}>
            <NFT element={element}/>
          </NavLink>
        )}
      </div>
    </section>
  )
}

export default MainContent