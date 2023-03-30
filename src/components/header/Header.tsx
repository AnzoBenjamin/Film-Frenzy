import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import SearchArea from "./SearchArea";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="header">
      <section className="section-nav">
        <Logo />
        <NavBar />
        <SearchArea/>
      </section>
      <Hero/>
    </header>
  );
};

export default Header;
