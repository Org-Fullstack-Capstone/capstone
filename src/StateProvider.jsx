/* eslint-disable react/prop-types */
//Setup data Layer
// track state of product and cart and users

import { createContext, useReducer } from "react";

//DATA Layer
export const StateContext = createContext();

//Build a provider
// eslint-disable-next-line no-unused-vars
export const StateProvider = ({reducer, initalState, childern})=>(
  <StateContext.Provider value = {useReducer(reducer,initalState)}>
    {childern}
  </StateContext.Provider>
);
export default StateProvider; 