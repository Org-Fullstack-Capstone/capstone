/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */


import './App.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import "./Components/Header.css"





function App() {
  const [inputType, setInputType] = useState("password");
  const [userToken, setUserToken] = useState(null);
  const [activeUsername, setActiveUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const sessionUserToken = sessionStorage.getItem("userToken");
  const sessionLoggedIn = sessionStorage.getItem("isLoggedIn");
  const sessionActiveUsername = sessionStorage.getItem("activeUsername");
  return (
    <>
   <div id="container">
         <div id="navbar">
         
         
         
         </div>
         <div id="main-section">
         <Routes>
           <Route path="/" element={<Home/> }/>
           <Route path="/Login" element={<Login/>}/>
           <Route path="/Checkout" element={<Checkout />}/>
           <Route
            path="/account/login"
            element={
              <Login
                inputType={inputType}
                onSetInputType={setInputType}
                onSetUserToken={setUserToken}
                onSetIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/account/register"
            element={
              <Register inputType={inputType} onSetInputType={setInputType} />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                userToken={userToken}
                sessionUserToken={sessionUserToken}
                sessionLoggedIn={sessionLoggedIn}
                onSetActiveUsername={setActiveUsername}
              />
            }
          />
         </Routes>
         </div>
    </div>
  </>
  )
}

export default App
