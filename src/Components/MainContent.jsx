import React, {useState} from 'react'
import NFT from './NFT'
import Sort from './UI/Sort'
import pic from '../Assets/img/nft/1.jpg'
import Modal from './UI/Modal/Modal'



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
    <section className='content'>
      <div className="content__header">
        <div className="content__top">
          <h1 className='content__title'>Cryptographics</h1>
          <button className='btn'>Create new item</button>
        </div>
        <Sort />
      </div>
      <div className="content__list">
        {nft.map(element => 
          <NFT element={element}/>  
        )}
      </div>
    </section>
  )
}

export default MainContent