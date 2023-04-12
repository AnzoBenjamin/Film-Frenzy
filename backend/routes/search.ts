import axios from "axios";
import express from "express";

const router = express.Router();
router.use(express.json());

const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;
const language = process.env.LANGUAGE;
const page = process.env.PAGE;

router.post('/movies', async (req,res)=>{
    try{
        const response = req.body;
        const searchTerm = response.query;
        const request = await axios.get(`${baseUrl}search/movie?api_key=${apiKey}${language}&query=${searchTerm}${page}`);
        const data = request.data.results;
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
})

router.post('/tv', async (req,res)=>{
    try{
        const response = req.body;
        const searchTerm = response.query;
        const request = await axios.get(`${baseUrl}search/tv?api_key=${apiKey}${language}&query=${searchTerm}${page}`);
        const data = request.data.results;
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
})

module.exports = router;