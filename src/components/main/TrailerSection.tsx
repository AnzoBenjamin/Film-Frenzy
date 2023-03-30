import React from "react";

const TrailerSection = () => {
  return (
    <section className="section-trailers">
      <div className="container">
        <div className="section-trailers__heading">
          <h2 className="secondary-heading">Recent Trailers</h2>
        </div>
        <div className="trailer"></div>
      </div>
      <img src="/arrows_square_left.png" alt="" className="trailer__arrow-left" />

      <img src="/arrows_square_right.png" alt="" className="trailer__arrow-right" />
    </section>
  );
};

export default TrailerSection;
