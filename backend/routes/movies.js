"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;
const language = process.env.LANGUAGE;
const page = process.env.PAGE;
const baseImageUrl = process.env.BASE_IMAGE_URL;
const posperSize = process.env.POSTER_SIZE;
const queryParams = `${language}${page}`;
router.get("/popular", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${baseUrl}movie/popular?api_key=${apiKey}${queryParams}`);
        const results = response.data.results;
        results.forEach((item) => {
            item.poster_url = `${baseImageUrl}${posperSize}${item.poster_path}`;
            item.rating_color =
                +item.vote_average >= 7
                    ? "green"
                    : item.vote_average >= 5
                        ? "orange"
                        : "red";
        });
        res.json(results);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
router.get("/trending", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${baseUrl}trending/movie/day?api_key=${apiKey}${queryParams}`);
        const results = response.data.results;
        results.forEach((item) => {
            item.poster_url = `${baseImageUrl}${posperSize}${item.poster_path}`;
            item.rating_color =
                +item.vote_average >= 7
                    ? "green"
                    : item.vote_average >= 5
                        ? "orange"
                        : "red";
        });
        res.json(results);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${baseUrl}movie/${req.params.id}?api_key=${apiKey}${language}`);
        const results = response.data.results;
        res.json(results);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
module.exports = router;
