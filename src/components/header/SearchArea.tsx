import React, { ChangeEvent, useState } from "react";

const SearchArea = () => {
  const [query, setQuery] = useState('');
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


  };
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div className="header__links">
      <div>
        <label htmlFor="search-query" className="header__links--label">
          <img src="/search.svg" />
        </label>
        <form onSubmit={formHandler}>
          <input
            type="text"
            id="search-query"
            placeholder="Search"
            className="header__links--search"
            onChange={inputHandler}
          />
        </form>
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
