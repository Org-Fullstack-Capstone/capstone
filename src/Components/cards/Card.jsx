import React, { useEffect } from "react";
import "./Card.css";
// import { AddRemoveBtn } from "../addremoveBtn/AddRemoveBtn";
import { useState } from "react";
import CardBody from "./CardBody";
import NewProduct from "../newproduct/NewProduct";
const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id == product.id);
  useEffect(() => {
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

    console.log(product);
   console.log(product.rating.rate);
  return (
    <div className="card">
      <img className="card__img" src={product.image} alt="" />
      <div>
        <h2>{product.category}</h2>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
       <div className="product_rating" >Rate : 
         {' '+product.rating.rate}
        </div>
      </div>
      <div className="card-price-add">
        <div>Price : ${product.price}</div>
      
        <button
          className={isAdded ? "add-item-btn" : "remove-item-btn"}
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "ADD To Cart" : "CANCLE Cart"}
        </button>
        
        {/* prdouct details */}
        <button
          className={"item-details-btn"}
          onClick={() => {
            
             fetch('https://fakestoreapi.com/products/'+product.id)
              .then(res=>res.json())
              .then(json=>console.log(json))
              .then(console.log(res.data))
          }}
        >
          {"Details"}
        </button>
        {/* prdouct update */}
        <button
          className={"item-update-btn"}
          onClick={() => {
               alert('Product update logic here')
          }}
        >
          {"Update"}
        </button>
        {/* prdouct delete */}
        <button
          className={"item-delete-btn"}
          onClick={() => {
               alert('Product delete logic here')
          }}
        >
          {"Delete"}
        </button>
      </div>
    </div>
  );
};

export default Card;
