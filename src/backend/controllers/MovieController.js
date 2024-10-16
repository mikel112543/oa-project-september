
import axios from "axios";

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