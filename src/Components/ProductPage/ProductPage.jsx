import React from 'react'
import style from './ProductPage.module.scss'

function ProductPage({element}) {
  return (
    <section className="productPage">
      <div className="container">
        <h1>{element.title}</h1>
        <p className="price">Цена NFT: {element.price} {element.crypto}</p>
      </div>
    </section>
  )
}

export default ProductPage