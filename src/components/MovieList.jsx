import {Button, Col, Row, Spinner} from "react-bootstrap";
import MovieCard from "./MovieCard.jsx";
import {useEffect, useRef, useState} from "react";
import axios from "axios";


export const MovieList = ({url, title}) => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const scrollRef = useRef(0); // Ref to store scroll position

    const loadNextPage = () => {
        scrollRef.current = window.scrollY;
        setPage(page + 1)
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url, {
                    params: {
                        page: page
                    }
                })
                if (response.status !== 200) {
                    setError(response.data.error)
                } else {
                    console.log(response.data)
                    const movies = response.data
                    setMovies(prevMovies => [...prevMovies, ...movies]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message)
            } finally {
                console.log("Fetch finished")
                setLoading(false)
                window.scrollTo(0, scrollRef.current);
            }
        }
        fetchMovies()
    }, [page]);

    return (
        <>
            {
                loading ? (
                    <div style={{
                        display: "flex",
                        width: '100%',
                        height: '40vh',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Spinner animation="border" variant='light'/>
                    </div>
                ) : error ? (<h1>Error: ${error}</h1>) : (
                    <>
                        {movies.map((movie, index) => (
                            <Col key={index} sm={8} md={2} className='mb-5'>
                                <MovieCard {...movie}/>
                            </Col>
                        ))}
                        <Row>
                            <Col xs={12}>
                                <div style={{display: 'flex', alignItems: 'center', marginBottom: '2%', justifyContent:'center'}}>
                                    <Button onClick={loadNextPage} variant="outline-light">Load More</Button>
                                </div>
                            </Col>
                        </Row>
                    </>)}
        </>
    )
}