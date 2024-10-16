import express from "express";
import {getMoviesBySearch, getTrendingMovies} from "../models/MovieModal.js";

const router = express.Router();

// /movies/trendingMovies
router.get("/trendingMovies", async (req, res) => {
    try {
        const movies = await getTrendingMovies();
        res.send(movies)
    } catch (e) {
        console.error(e.message)
        res.status(400).send("Internal Server Error")
    }w
})
// /movies/popularMovies
router.get("/search", async (req, res) => {
    try {
        // Get Search query from frontend
        const searchQuery = req.query.query;
        console.log(searchQuery)
        const movies = await getMoviesBySearch(searchQuery);
        res.send(movies)
    } catch (e) {
        res.status(400).send("Internal Server Error")
    }
})

export default router