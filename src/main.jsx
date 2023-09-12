/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker"
import StateProvider from "./StateProvider"
import reducer, { initialState} from './reducer'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
     {/* <StateProvider initialState={initialState} reducer={reducer}>  */}
      <App />
     {/* </StateProvider>  */}
  </BrowserRouter>,
)

serviceWorker.unregister();