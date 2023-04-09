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
router.use(express_1.default.json());
const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;
const language = process.env.LANGUAGE;
const page = process.env.PAGE;
router.post('/movies', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = req.body;
        const searchTerm = response.query;
        const request = yield axios_1.default.get(`${baseUrl}search/movie?api_key=${apiKey}${language}&query=${searchTerm}${page}`);
        const data = request.data.results;
        res.json(data);
    }
    catch (error) {
        console.log(error);
    }
}));
router.post('/tv', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = req.body;
        const searchTerm = response.query;
        const request = yield axios_1.default.get(`${baseUrl}search/tv?api_key=${apiKey}${language}query=${searchTerm}${page}`);
        const data = request.data.results;
        res.json(data);
    }
    catch (error) {
        console.log(error);
    }
}));
module.exports = router;
