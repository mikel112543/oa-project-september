import {TrendingMovieDTO} from "../dtos/TrendingMovieDTO.js";
import {
    bookmarkMovieController,
    getMovieByIdController,
    getMoviesBySearchController,
    getPopularMoviesController,
    getTrendingMoviesController
} from "../controllers/MovieController.js";
import {MovieDTO} from "../dtos/MovieDTO.js";
import db from "../db.js";


export const generateDTOs = (data, dtoType = 'trending') => {
    const cleanedMovies = []
    data.map(movie => {
        let cleanedMovie = new TrendingMovieDTO(movie.title, movie.popularity, movie.release_date, movie.poster_path, movie.id)
        cleanedMovies.push(cleanedMovie)
    })
    return cleanedMovies
}

export const generateMovieDetails = (movie) => {
    const {backdrop_path, release_date, genres, poster_path, title, id, runtime, overview, popularity, isBookmarked} = movie
    return new MovieDTO(title, popularity, release_date, poster_path, id, backdrop_path, genres, overview, runtime, isBookmarked)
}

export const getTrendingMovies = async () => {
    const movies = await getTrendingMoviesController()
    return generateDTOs(movies)
}

export const getPopularMovies = async (page) => {
    const movies = await getPopularMoviesController(page);
    return generateDTOs(movies)
}

export const getMoviesBySearch = async (searchQuery) => {
    const movies = await getMoviesBySearchController(searchQuery)
    return generateDTOs(movies)
}

export const getMovieById = async (movieId) => {
    const movie = await getMovieByIdController(movieId)
    let bookmarked = await getMovieByIdFromDb(movieId)
    movie.isBookmarked = bookmarked.length > 0;
    return generateMovieDetails(movie)
}

export const bookmarkMovie = async (movieId) => {
    return await bookmarkMovieController(movieId)
}

const getMovieByIdFromDb = async (movieId) => {
    const [rows] = await db.query('SELECT id FROM favouriteMovies WHERE id = ?', [movieId]);
    return rows;
}