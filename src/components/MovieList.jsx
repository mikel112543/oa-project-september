import { Col, Spinner} from "react-bootstrap";
import MovieCard from "./MovieCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";


export const MovieList = ({url, title}) => {
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
                } else {
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
                    <Spinner animation="border"/>
                ) : error ? (<h1>Error: ${error}</h1>) : (
                    movies.map((movie, index) => (
                            <Col key={index} sm={8} md={2} className='mb-5'>
                                <MovieCard {...movie}/>
                            </Col>
                        )
                    ))}
        </>
    )
}