import React from "react";
import "../styles/SearchBar.css";
import SearchIcon from "../icons/search-icon.jsx";


const SearchBar = ({ bubblePost, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(bubblePost);

    const results = bubblePost.filter((bubblePost) => bubblePost.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      (bubblePost.content.toLowerCase().includes(e.target.value.toLowerCase())) || (bubblePost.user.toLowerCase().includes(e.target.value.toLowerCase())));
    setSearchResults(results);
  };
  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <div className="searchInputs">
          <input

            type="text"
            id="search"
            onChange={handleSearchChange}
          />
          <div className="searchIcon">
            <SearchIcon />
          </div>
        </div>

      </form>
    </header>
  );
};
export default SearchBar;
/*
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
*/