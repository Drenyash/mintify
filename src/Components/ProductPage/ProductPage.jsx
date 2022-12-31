import React from 'react'
import { Outlet } from 'react-router-dom'

function ProductPage({element}) {
  return (
    <div>
      <h1>Product page:</h1>
      {console.log(element)}
      <Outlet />
    </div>
  )
}

export default ProductPage