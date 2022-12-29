import React from 'react'
import Modal from './UI/Modal/Modal'

function NFT({element}) {
  return (
    <article className="nft">
      <div className="nft__top">
        <img className="nft__img" src={element.img} alt="" />
      </div>
      <div className="nft__body">
        <h3 className="nft__title">{element.title}</h3>
        <author className="nft__text">{element.author}</author>
      </div>
      <div className="nft__footer">
        <p className="nft__type">{element.type}</p>
        <button href="" className="nft__price">{element.price} <span className='cryptography-type'>{element.crypto}</span></button>
      </div>
    </article>
  )
}

export default NFT