/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

import "./Product.css"
function Product({id, title, image , price, rating}) {
  return (
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="prdouct_price"><small>$</small><strong>{price}</strong></p>
          <div className="product_rating" >
          {Array(rating)
           .fill()
           .map((_, index)=>(<p key ={index}>*</p>))}
           </div>
          </div>
       <img src={image} alt="product image"></img>
       <div className="Product-btns">
       <button>Add to basket</button>
       <button>Product Details</button>
       </div>
    </div>
  )
}

export default Product
