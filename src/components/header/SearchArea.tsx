import React from "react";

const SearchArea = () => {
  return (
    <div className="header__links">
      <div>
        <label htmlFor="search-query" className="header__links--label">
          <img src="/search.svg" />
        </label>
        <input
          type="text"
          id="search-query"
          placeholder="Search"
          className="header__links--search"
        />
      </div>

      <div className="header__icon-container">
        <a href="">
          <img src="iconmonstr-facebook-4.svg" alt="Facebook icon" />
        </a>
        <a href="">
          <img src="iconmonstr-gmail-4.svg" alt="Gmail icon" />
        </a>
        <a href="">
          <img src="iconmonstr-twitter-4.svg" alt="Twitter icon" />
        </a>
      </div>
    </div>
  );
};

export default SearchArea;
