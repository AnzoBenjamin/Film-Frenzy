import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Spinner from "../Spinner";
import MediaContainer from "./MediaContainer";

interface Props {
  loading: boolean;
  media: string[];
  fetchMedia: (url: string) => void;
  selectedMedia: string;
  setSelectedMedia: (media: string) => void;
  selectedParameter: string;
  setSelectedParameter: (parameter: string) => void;
}

const MediaSection: React.FC<Props> = ({
  loading,
  media,
  fetchMedia,
  selectedMedia,
  setSelectedMedia,
  selectedParameter,
  setSelectedParameter,
}) => {
  const spinnerVariants = {
    loading: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const componentVariants = {
    loading: {
      opacity: 0,
    },
    hidden: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };

  function mediaHandler(e: React.MouseEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setSelectedMedia(target.value);
  }
  function selectHandler(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedParameter(e.target.value);
  }
  useEffect(() => {
    if (selectedMedia === "1") {
      if (selectedParameter === "1") {
        fetchMedia("https://film-frenzy.onrender.com/movies/trending");
      } else {
        fetchMedia("https://film-frenzy.onrender.com/movies/popular");
      }
    } else {
      if (selectedParameter === "1") {
        fetchMedia("https://film-frenzy.onrender.com/trending");
      } else {
        fetchMedia("https://film-frenzy.onrender.com/popular");
      }
    }
  }, [selectedParameter, selectedMedia]);

  return (
    <section className="section-media">
      <div className="container">
        <div className="flex jc-sb section-media__heading">
          <div>
            <select
              name="paramaters"
              id="db-parms"
              className="query-parms"
              onChange={selectHandler}
            >
              <option value="1" className="query-parms__item">
                Trending
              </option>
              <option value="2" className="query-parms__item">
                Popular
              </option>
            </select>
          </div>
          <div className="toggle-buttons">
            <input
              type="radio"
              id="movies"
              name="toggle"
              value="1"
              className="toggle-buttons__input"
              defaultChecked
              onClick={mediaHandler}
            />
            <label className="toggle-buttons__movies" htmlFor="movies">
              Movies
            </label>

            <input
              type="radio"
              id="shows"
              name="toggle"
              value="2"
              className="toggle-buttons__input"
              onClick={mediaHandler}
            />
            <label className="toggle-buttons__shows" htmlFor="shows">
              TV Shows
            </label>
          </div>
        </div>
        <motion.div
          variants={spinnerVariants}
          initial="loading"
          animate={loading ? "loading" : "hidden"}
          style={{ position: "absolute" }}
        >
          <Spinner />
        </motion.div>

        <motion.div
          className="grid grid-3-cols display"
          variants={componentVariants}
          initial="loading"
          animate={!loading ? "hidden" : "loading"}
        >
          {media.map((element, index) => (
            <MediaContainer key={index} mediaData={element} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSection;
