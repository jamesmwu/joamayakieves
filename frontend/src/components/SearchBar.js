import React from "react";
import "../styles/SearchBar.css";
import SearchIcon from "../icons/search-icon.jsx";


const SearchBar = ({ setSearch }) => {



  return (
    <div className="search searchInputs">
      <input

        type="text"
        id="search"
        onChange={(e) => { setSearch(e.target.value); }}
      />
      <div className="searchIcon">
        <SearchIcon />
      </div>
    </div>

  );
};
export default SearchBar;
