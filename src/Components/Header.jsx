/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"
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
       <Link to="/login" className="header_link">
         <div className="header_option">
           <span>Hello,</span>
           <span>Sign In</span>
         </div>
       </Link>
     {/*Basket icon with number*/}
     </nav> 
    </>
  )
}

export default Header
