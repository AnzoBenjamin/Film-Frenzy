import React from "react";

const MediaContainer = ({ mediaData }: any) => {
  
  return (
    <figure className="display-container">
      <div className="display-image-container">
        <img
          src={mediaData.poster_url}
          alt=""
          className="display-container__img"
        />
        <figcaption className="display-summary">
          <p className="display-summary__text">{mediaData.overview}</p>
        </figcaption>
      </div>
      <figcaption className="display-details">
        <p className={`display-details__rating ${mediaData.rating_color}`}>
          {mediaData.vote_average.toFixed(1)}
        </p>
        <p className="display-details__release-date">{mediaData.release_date}</p>
        <p className="display-details__title">{mediaData.title}</p>
      </figcaption>
    </figure>
  );
};

export default MediaContainer;
