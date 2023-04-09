import React, { useState, useEffect } from "react";
import axios from "axios";
import MediaSection from "./MediaSection";
import TrailerSection from "./TrailerSection";
const Main = () => {
  const [media, setMedia] = useState([]);
  const [mediaLoading, setMediaLoading] = useState(true);
  const [trailerLoading, setTrailerLoading] = useState(true);
  const [trailers, setTrailers] = useState([]);

  async function fetchMedia(url: string) {
    setMediaLoading(true);
    try {
      const res = await axios.get(url);
      const results = await res.data;
      setMedia(results);
      setMediaLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchTrailers() {
    setTrailerLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/trailers", media);
      const trailerUrls = await res.data;
      setTrailers(trailerUrls);
      setTrailerLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMedia("http://localhost:3000/");
  }, []);
  return (
    <div>
      <main className="search-section"></main>
      <main className="main">
        <MediaSection
          loading={mediaLoading}
          media={media}
          fetchMedia={fetchMedia}
        />
        <TrailerSection
          loading={trailerLoading}
          trailers={trailers}
          fetchTrailers={fetchTrailers}
          media={media}
        />
      </main>
    </div>
  );
};

export default Main;
