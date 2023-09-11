/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */


import './App.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Checkout from './Components/Checkout';


function App() {


  return (
    <>
   <div id="container">
         <div id="navbar">
        
         <Link to='/checkout'>Checkout</Link>
         <Link to='/Login'>Login</Link>
         <Link to='/'>Home</Link>
         </div>
         <div id="main-section">
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Login" element={<Login/>}/>
           <Route path="/Checkout" element={<Checkout />}/>
         </Routes>
         </div>
    </div>
  </>
  )
}

export default App
