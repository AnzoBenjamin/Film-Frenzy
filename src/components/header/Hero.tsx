import React from "react";

const Hero = () => {
  return <section className="section-hero">
    <div className="section-hero__text">
          <h1 className="primary-heading grid grid-1-col">
            <span> Lights, </span>
            <span> Camera, </span>
            <span> Action </span>
          </h1>
          <h2 className="secondary-heading">
            Discover the best movies with film frenzy
          </h2>
        </div>
        <div className="section-hero__btn-area">
          <a href="#" className="btn btn-trending">Trending</a>
          <a href="#" className="btn btn-popular">Popular</a>
          <a href="#" className="btn btn-trailers">Recent Trailers</a>
        </div>
  </section>;
};

export default Hero;
