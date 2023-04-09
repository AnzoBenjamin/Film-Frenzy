import axios from "axios";
import express from "express";
const router = express.Router();
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;
const language = process.env.LANGUAGE;
const baseImageUrl = process.env.BASE_IMAGE_URL;
const posperSize = process.env.POSTER_SIZE;
const page = process.env.PAGE;
const queryParams = `${language}${page}`;

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}trending/movie/day?api_key=${apiKey}${queryParams}`
    );
    const results = response.data.results;
    results.forEach((item: any) => {
      item.poster_url = `${baseImageUrl}${posperSize}${item.poster_path}`;
      item.rating_color =
        +item.vote_average >= 7
          ? "green"
          : item.vote_average >= 5
          ? "orange"
          : "red";
    });
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
