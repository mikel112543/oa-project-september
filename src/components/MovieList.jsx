import {Col} from "react-bootstrap";
import MovieCard from "./MovieCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";


export const MovieList = ({url}) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url)
                if (response.status !== 200) {
                    setError(response.data.error)
                }else{
                    console.log(response.data)
                    setMovies(response.data)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message)
            } finally {
                console.log("Fetch finished")
                setLoading(false)
            }
        }
        fetchMovies()
    }, []);

    return (
        <>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : error ? (<h1>Error: ${error}</h1>) : (
                    movies.map((movie, index) => (
                            <Col key={index} sm={8} md={3} className='mb-5'>
                                <MovieCard title={movie.title} popularity={movie.popularity} releaseDate={movie.releaseDate}
                                           posterPath={movie.posterPath}/>
                            </Col>
                        )
                    ))}
        </>
    )
}