import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";

import Search from "./components/search/Search";
import AddProducts from "./components/addproducts/AddProducts";
import CardBody from "./Components/cards/CardBody";
import Button from "./components/button/Button";
import Navbar from "./components/Navbar/Navbar";
import SortProduct from "./components/sort/SortProduct";
import "./App.css";
import Header1 from "./components/header/header1";
import { Sort } from "@mui/icons-material";

const App = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [userToken, setUserToken] = useState(null);
  const [activeUsername, setActiveUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
   const [selects, setSelects] = useState(null);

  // Session Storage Data
  const sessionUserToken = sessionStorage.getItem("userToken");
  const sessionLoggedIn = sessionStorage.getItem("isLoggedIn");
  const sessionActiveUsername = sessionStorage.getItem("activeUsername");

 // Store sortby order i.e. ascending or descending
 const [sortType, setSortType] = useState("ascending");
 const [sortKey, setSortKey] = useState("title");
 // Sortby field i.e. title or description
 const [sortByField, setSortByField] = useState("title");
  const location = useLocation();
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("Fetch Product Successfuly");
  }, []);

  

  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }
 // Sort products
 
//  const itmesSort = items.sort((a,b) =>{
//   const priceA = a.price; // ignore upper and lowercase
//   const priceB = b.price; // ignore upper and lowercase
//   if (priceA > priceB) {
//     return -1;
//   }
//   if (priceA < priceB) {
//     return 1;
//   }
//   return 0;
//   }
// );
  // filter products
   const itmesFilter = items.filter((item) =>(
    (item.title.toLowerCase().includes(searchValue.toLowerCase().sort) 
    ||
    item.description.toLowerCase().includes(searchValue.toLowerCase())
    ||
    item.category.toLowerCase().includes(searchValue.toLowerCase()))
    )
  
  );
  
  
  // Sort Filttered Products
  // function sortFunc(itmesFilter, sortType, sortByField) {
  //   if (sortType === "ascending") {
  //     results.sort((a, b) => a[sortByField] < b[sortByField] ? -1 : 1)  
  //   }
  //   else if (sortType === "descending") {
  //     results.sort((a, b) => b[sortByField] > a[sortByField] ? 1 : -1)
  //   }
  //   return results;
  // }
    // alert(document.getElementsByClassName("sortProduct").value
 
    itmesFilter.sort((a,b) =>{
    const priceA =a[{selects}];       
    const priceB = b[{selects}]; 
    if (priceA < priceB) {
      return -1;
    }
    if (priceA > priceB) {
      return 1;
    }
    return 0;
    }
  )
 
  console.log('Sorted products by ' + selects)
  console.log(itmesFilter)
  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  // console.log(addedItems);
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
    // console.log(addedItems);
  }
  return (
    <div>
      <div className="body__container">
      {/* <Header1 /> */}
        <div className="nav">
          <Header1 />
          <Navbar
          isLoggedIn={isLoggedIn}
          sessionLoggedIn={sessionLoggedIn}
          onSetIsLoggedIn={setIsLoggedIn}
        />
          <div className="nav-right">
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSearchData}
            />
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
          
        </div>
        {/* <SortProduct/> */}
        <h3>Sort By: {selects}</h3>
        <select selected onChange={(e) => setSelects(e.target.value) }> 
         < option value=""></option>
         <option value="title">title</option>
         <option value="price">price</option>
         <option value="catogery">catogery</option>
      </select>
        {showAddProducts && (
          
          <AddProducts
            click={setShowAddProducts}
            items={addedItems}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />
        )}
        <CardBody
          products={itmesFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />

        
      </div>
      
    </div>
  );
};

export default App;
