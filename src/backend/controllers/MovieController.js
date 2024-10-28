import axios from "axios";
import db from "../db.js";

export const getTrendingMoviesController = async () => {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        })
        const data = response.data
        return data.results
    } catch (e) {
        console.error('Error fetching trending movies: ', e)
        throw e
    }
}

export const getPopularMoviesController = async (page) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        })
        const data = response.data
        return data.results
    } catch (e) {
        console.error(`Error fetching popular movies: ${e.message}`)
        throw e;
    }
}

export const getMoviesBySearchController = async (searchQuery) => {
    try {
        // Pass search query into url
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        })
        const data = response.data
        return data.results
    } catch (e) {
        console.error('Error fetching trending movies: ', e)
        throw e
    }
}

export const getMovieByIdController = async (movieId) => {
    try {
        // Pass search query into url
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        })
        return response.data
    } catch (e) {
        console.error('Error fetching trending movies: ', e)
        throw e
    }
}

export const bookmarkMovieController = async (movieId) => {
    try {
        return await db.query('INSERT INTO favouriteMovies (id) VALUES (?)',
            movieId)
    } catch (e) {
        console.error('Could not insert bookmark')
    }
}