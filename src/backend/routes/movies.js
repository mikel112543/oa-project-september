import express from "express";
import {getMovieById, getMoviesBySearch, getPopularMovies, getTrendingMovies} from "../models/MovieModal.js";
import {getMoviesBySearchController} from "../controllers/MovieController.js";

const router = express.Router();

// /movies/trendingMovies
router.get("/trendingMovies", async (req, res) => {
    try {
        console.log('Getting Movies')
        const movies = await getTrendingMovies();
        res.send(movies)
    } catch (e) {
        console.error(e.message)
        res.status(400).send("Internal Server Error")
    }
})

router.get("/popularMovies", async (req, res) => {
    try {
        console.log('Getting Popular Movies...')
        const movies = await getPopularMovies();
        res.send(movies)
    } catch (e) {
        console.error(e.message)
        res.status(400).send("Internal Server Error")
    }
})
// /movies/popularMovies
router.get("/search", async (req, res) => {
    try {
        // Get Search query from frontend
        const searchQuery = req.query.searchQuery;
        console.log(searchQuery)
        const movies = await getMoviesBySearch(searchQuery);
        res.send(movies)
    } catch (e) {
        res.status(400).send("Internal Server Error")
    }
})

router.get("/movieDetail", async (req, res) => {
    try {
        const movieId = req.query.movieId;
        console.log(movieId)
        const movie = await getMovieById(movieId)
        res.send(movie)
    } catch (e) {
        res.status(400).send("Internal Server Error")
    }
})

export default router