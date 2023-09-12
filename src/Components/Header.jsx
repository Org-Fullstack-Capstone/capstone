/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <>
    <nav className="header">
     {/*logo on the left*/}
     <Link to="/"> <img className="header_logo" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/world-brand-amazon-png-logo-vector-27.png" alt="Capstone Logo"></img>
     </Link>
     
     {/*search box*/} 
     <div className="header_search">
        <input type="text" className="header_searchInput"/>
        <SearchIcon className="header_searchIcon" />
     </div>
     {/*3 Links*/}   
      <div className="header_nav">
     {/* Link 1 Sigin and greeting*/} 
      
       <Link to="/login" className="header_link">
         <div className="header_option">
           <span className="header_option1">Hello,Abdul</span>
           <span className="header_option2">Sign In</span>
         </div>
       </Link>
      {/* Returns and orders*/}
       <Link to="/" className="header_link">
         <div className="header_option">
           <span className="header_option1" >Returns</span>
           <span className="header_option2">& Orders</span>
         </div>
       </Link>
       {/* Your prime*/}
       <Link to="/" className="header_link">
         <div className="header_option">
           <span className="header_option1">Your,</span>
           <span className="header_option2">Prime</span>
         </div>
       </Link>
       </div>
     {/*Basket icon with number*/}
     <Link to="/checkout" className="header_link">
      <div className ="header_optionBasket">
        {/* Shoping basket icon*/}
        <ShoppingBasketIcon />
        {/* Number of items in the basket*/}
        <span className="header_option2 header_basketCount">0</span>
      </div>
     </Link>
     </nav> 
    </>
  )
}

export default Header
