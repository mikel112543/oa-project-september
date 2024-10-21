import {TrendingMovieDTO} from "../dtos/TrendingMovieDTO.js";
import {
    getMovieByIdController,
    getMoviesBySearchController, getPopularMoviesController,
    getTrendingMoviesController
} from "../controllers/MovieController.js";
import {MovieDTO} from "../dtos/MovieDTO.js";


export const generateDTOs = (data, dtoType = 'trending') => {
    const cleanedMovies = []
    data.map(movie => {
        let cleanedMovie = new TrendingMovieDTO(movie.title, movie.popularity, movie.release_date, movie.poster_path, movie.id)
        cleanedMovies.push(cleanedMovie)
    })
    return cleanedMovies
}

export const generateMovieDetails = (movie) => {
    const {backdrop_path, release_date, genres, poster_path, title, id, runtime, overview, popularity} = movie
    return new MovieDTO(title, popularity, release_date, poster_path, id, backdrop_path, genres, overview, runtime)
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
    return generateMovieDetails(movie)
}