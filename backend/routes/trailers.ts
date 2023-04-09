import axios from "axios";
import express from "express";

const router = express.Router();
router.use(express.json());

const apiKey = process.env.API_KEY;

router.post('/', (req, res)=>{

    try{
        const request = req.body;
        const IDs = request.map(movie=>movie.id)

        Promise.all(IDs.map(id=>{
            return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)
            .then(response=>response.json())
            .then(data=>{
                const trailers = data.results.filter(video=> video.type==='Trailer');
                const trailerUrls = trailers.map(trailer=>`https://www.youtube.com/embed/${trailer.key}`);
                return trailerUrls;
            }).catch(error=>{
                console.log(error)
            })
        })).then(trailerUrlsArrays=>{
            const trailerUrls = trailerUrlsArrays.map(trailer=>{
                if(Array.isArray(trailer)){
                    return trailer[0];
                }
                else{
                    return trailer;
                }
            });
            res.json(trailerUrls);
        })
    }
    
    catch(error){
        console.log(error)
    }
})

module.exports = router;