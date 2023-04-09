import axios from "axios";
import express from "express";
const router = express.Router();
const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;
const language = process.env.LANGUAGE;
const page = process.env.PAGE;
const baseImageUrl = process.env.BASE_IMAGE_URL;
const posperSize = process.env.POSTER_SIZE;
const queryParams = `${language}${page}`;

router.get("/popular", async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}tv/popular?api_key=${apiKey}${queryParams}`
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
      item.title = item.original_name;
    });
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/trending", async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}trending/tv/day?api_key=${apiKey}${queryParams}`
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
      item.title = item.original_name;
    });
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}tv/${req.params.id}?api_key=${apiKey}${language}`
    );
    const results = response.data.results;
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
