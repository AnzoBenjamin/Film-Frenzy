"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use(express_1.default.json());
const apiKey = process.env.API_KEY;
router.post("/movies", (req, res) => {
    try {
        const request = req.body;
        const IDs = request.map((movie) => movie.id);
        Promise.all(IDs.map((id) => {
            return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                const trailers = data.results.filter((video) => video.type === "Trailer");
                const trailerUrls = trailers.map((trailer) => `https://www.youtube.com/embed/${trailer.key}`);
                return trailerUrls;
            })
                .catch((error) => {
                console.log(error);
            });
        })).then((trailerUrlsArrays) => {
            const trailerUrls = trailerUrlsArrays.map((trailer) => {
                if (Array.isArray(trailer)) {
                    return trailer[0];
                }
                else {
                    return trailer;
                }
            });
            res.json(trailerUrls);
        });
    }
    catch (error) {
        console.log(error);
    }
});
router.post("/tv", (req, res) => {
    try {
        const request = req.body;
        const IDs = request.map((tv) => tv.id);
        Promise.all(IDs.map((id) => {
            return fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                const trailers = data.results.filter((video) => video.type === "Trailer");
                const trailerUrls = trailers.map((trailer) => `https://www.youtube.com/embed/${trailer.key}`);
                return trailerUrls;
            })
                .catch((error) => {
                console.log(error);
            });
        })).then((trailerUrlsArrays) => {
            const trailerUrls = trailerUrlsArrays.map((trailer) => {
                if (Array.isArray(trailer)) {
                    return trailer[0];
                }
                else {
                    return trailer;
                }
            });
            res.json(trailerUrls);
        });
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = router;
