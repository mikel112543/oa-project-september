import {Carousel} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

export const MovieCarousel = ({url}) => {
    const [movies, setMovies] = useState(null)
    const [loadingMovies, setLoadingMovies] = useState(false)
    const [errorMovies, setErrorMovies] = useState(null)

    useEffect(async () => {
        try {
            setLoadingMovies(true)
            const res = await axios.get(url)
            if (res.status !== 200) {
                setErrorMovies(res.data.error)
            } else {
                setMovies(res.data)
            }
        } catch (e) {
            console.error('Error fetching data:', e);
            setErrorMovies(e.message)
        } finally {
            setLoadingMovies(false)
        }
    }, [url]);

    return (
        <>
            <h2>Trending Movies</h2>
            <Carousel>
                {movies.map((movie, index) => (
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>{movie.title}</h3>
                            <p>{movie.releaseDate}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}