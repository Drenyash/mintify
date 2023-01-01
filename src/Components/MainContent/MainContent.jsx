import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import NFT from '../NFT/NFT'
import Sort from '../Sort/Sort'
import pic from '../../Assets/img/nft/1.jpg'
import style from './MainContent.module.scss'
import Button from '../../UI/Button/Button'

function MainContent({getElement}) {
  const [nft, setNft] = useState([
    {id: 1, img: pic, title: 'The Holy Grail', author: 'TakenHara', type: 'Fixed price', price: 0.001, crypto: 'ETH'},
    {id: 2, img: pic, title: 'Mirror Glass Efect', author: 'Pixart Motion', type: 'Fixed price', price: 0.005, crypto: 'ETH'},
    {id: 3, img: pic, title: 'Neon in Life', author: 'Pixart Motion', type: 'Fixed price', price: 0.002, crypto: 'ETH'},
    {id: 4, img: pic, title: 'Oil Source', author: 'Pixart Motion', type: 'Fixed price', price: 0.001, crypto: 'ETH'},
    {id: 5, img: pic, title: 'World Surface', author: 'Pixart Motion', type: 'Fixed price', price: 0.004, crypto: 'BTC'},
    {id: 6, img: pic, title: 'Infinity Door', author: 'Pixart Motion', type: 'Fixed price', price: 0.005, crypto: 'BTC'},
    {id: 7, img: pic, title: 'Bi-conditional Effect', author: 'Pixart Motion', type: 'Fixed price', price: 0.002, crypto: 'BTC'},
    {id: 8, img: pic, title: 'Motion view', author: 'Pixart Motion', type: 'Fixed price', price: 0.009, crypto: 'ETH'},
    {id: 9, img: pic, title: 'Santa clays', author: 'Pixart Motion', type: 'Fixed price', price: 0.023, crypto: 'BTC'},
    {id: 10, img: pic, title: 'Ejic', author: 'TakenHara', type: 'Fixed price', price: 12.113, crypto: 'BTC'},
  ])

  const createNewNFT = (values) => {
    const createNFT = {
      id: Date.now(), 
      img: pic, 
      title: 'Motion view', 
      author: 'Pixart Motion', 
      type: 'Fixed price', 
      price: 0.009, 
      crypto: 'ETH',
    }
    setNft(createNFT)
  }
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
          <Link to={`/product/${element.id}`} onClick={() => getElement(element)}>
            <NFT element={element}/>
          </Link>
        )}
      </div>
    </section>
  )
}

export default MainContent