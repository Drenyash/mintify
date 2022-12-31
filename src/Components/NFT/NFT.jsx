import React from 'react'
import styles from './NFT.module.scss'

function NFT({element}) {
  return (
    <article className={styles.nft}>
      <div className={styles.nft__top}>
        <img className="nft__img" src={element.img} alt="" />
      </div>
      <div className={styles.nft__body}>
        <h3 className={styles.nft__title}>{element.title}</h3>
        <author className={styles.nft__text}>{element.author}</author>
      </div>
      <div className={styles.nft__footer}>
        <p className={styles.nft__type}>{element.type}</p>
        <button href="" className={styles.nft__price}>{element.price} <span className='cryptography-type'>{element.crypto}</span></button>
      </div>
    </article>
  )
}

export default NFT