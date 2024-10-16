import {TrendingMovieDTO} from "../dtos/TrendingMovieDTO.js";
import {
    getMoviesBySearchController,
    getTrendingMoviesController
} from "../controllers/MovieController.js";


export const generateDTOs = (data, dtoType='trending') => {
    const cleanedMovies = []
    data.map(movie => {
        let cleanedMovie = new TrendingMovieDTO(movie.title, movie.popularity, movie.release_date, movie.poster_path)
        cleanedMovies.push(cleanedMovie)
    })
    return cleanedMovies
}

export const getTrendingMovies = async () => {
    const movies = getTrendingMoviesController()
    return generateDTOs(movies)
}

export const getMoviesBySearch = async (searchQuery) => {
    const movies = getMoviesBySearchController(searchQuery)
    return generateDTOs(movies)
}