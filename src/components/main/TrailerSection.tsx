import React, { useEffect } from "react";
import TrailerContainer from "./TrailerContainer";
import Spinner from "../Spinner";
import { motion } from "framer-motion";
const TrailerSection = ({ trailers, fetchTrailers, media, loading }) => {
  useEffect(() => {
    if (media.length > 0) {
      fetchTrailers();
    }
  }, [media]);

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
        duration: 0.3
      }
    }
  }

  const componentVariants = {
    loading:{
      opacity:0,
    },

    hidden:{
      opacity: 1,
      transition: {
        delay: 0.3
      }
    }
  }
  return (
    <section className="section-trailers">
      <div className="container">
        <div className="section-trailers__heading">
          <h2 className="secondary-heading">Recent Trailers</h2>
        </div>
          <motion.div
          variants={spinnerVariants}
          initial='loading'
          animate={loading? 'loading' : 'hidden'}
          style={{position: 'absolute'}}
          >
            <Spinner/>
          </motion.div>
          <motion.div
          variants={componentVariants}
          initial='loading'
          animate={!loading? 'hidden' : 'loading'}
          className='trailer'
          >

          {trailers.map((trailer, index) => {
            return <TrailerContainer key={index} trailer={trailer} title={media[index].title}/>;
          })}
          </motion.div>
      </div>
      <img
        src="/arrows_square_left.png"
        alt=""
        className="trailer__arrow-left"
      />

      <img
        src="/arrows_square_right.png"
        alt=""
        className="trailer__arrow-right"
      />
    </section>
  );
};

export default TrailerSection;
