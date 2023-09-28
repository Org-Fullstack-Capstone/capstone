import React from "react";
import "./Search.css";
const Search = ({ value, onChangeData }) => {
  return (
    <div className="searchProduct">
      <input
        className="search__input"
        type="text"
        placeholder="Enter product name ,description or category"
        value={value}
        onChange={onChangeData}
      />
    </div>
  );
};

export default Search;
