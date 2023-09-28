/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoGo from "../../assets/amazon.png";
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header1.css";
import '../Navbar/Navbar.jsx'
function Header1() {
  return (
    <>
    <nav className="header" src={LoGo} alt="">
     {/*logo on the left*/}
     <Link to="/"> <img className="header_logo" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/world-brand-amazon-png-logo-vector-27.png" alt="Capstone Logo"></img>
     </Link>
     
     {/*search box*/} 
     {/* <div className="header_search">
        <input type="text" className="header_searchInput"/>
        <SearchIcon className="header_searchIcon" />
     </div> */}
     <Link to="/checkout" className="header_link">
        
     </Link>
     </nav> 
    </>
  )
}

export default Header1
