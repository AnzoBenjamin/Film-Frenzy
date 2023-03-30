import React from "react";

const NavBar = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        <li className="header-nav__list--item">
          <span>Movies</span>

          <div className="dropdown">
            <span className="dropdown-btn">
              <img
                src="/arrows_square_down.svg"
                alt=""
                className="header-nav__list--icon"
              />
            </span>

            <ul className="dropdown-menu">
              <li className="dropdown-menu__item">
                <a href="">Popular</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="">Trending</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="">Recent Trailers</a>
              </li>
            </ul>
          </div>
        </li>

        <li className="header-nav__list--item">
          <span>TV-Shows</span>
          <div className="dropdown">
            <span className="dropdown-btn">
              <img
                src="/arrows_square_down.svg"
                alt=""
                className="header-nav__list--icon"
              />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-menu__item">
                <a href="">Popular</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="">Trending</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="">Recent Trailers</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="header-nav__list--item">
          <div className="dropdown">
            <img
              src="/notification_bell.png"
              alt="Notification Bell"
              className="header-nav__icon"
            />
            <ul className="dropdown-menu">
              <li className="dropdown-menu__item">
                <a href="">Notifications</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="">Reviews</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="">Profile</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
