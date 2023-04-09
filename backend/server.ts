const express = require("express");
const cors = require("cors");
const IndexRoute = require("./routes/index");
const MoviesRoute = require("./routes/movies");
const TVRoute = require("./routes/tv");
const TrailerRoute = require("./routes/trailers");
const SearchRoute = require("./routes/search");

require("dotenv").config();

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", IndexRoute);
app.use("/movies", MoviesRoute);
app.use("/tv", TVRoute);
app.use("/trailers", TrailerRoute);
app.use("/search", SearchRoute);

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});