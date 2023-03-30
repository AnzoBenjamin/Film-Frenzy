import { isJSDocAugmentsTag } from "typescript";

const express = require('express');
const axios = require('axios');
require('dotenv').config();

const {MediaContent , MediaType} = require('./types');

const port = 3000;
const app = express();
const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`;

app.get('/',async () => {
    const response = await axios.get(BASE_URL);
    const results = response.data.results;
    console.log(results);
}
)

app.listen(port, ()=>{
    console.log("Server listening on port: "+port)
})

