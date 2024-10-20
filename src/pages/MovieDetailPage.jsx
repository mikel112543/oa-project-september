import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Col, Container, Image, Row} from "react-bootstrap";
import {MovieDetail} from "../components/MovieDetail.jsx";
import "../styles/MovieDetailPage.css"

export const MovieDetailPage = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [movie, setMovie] = useState({})
    const {id} = useParams();

    const MOVIE_DETAIL_URL = "http://localhost:3000/movies/movieDetail";

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                setLoading(true)
                const response = await axios.get(MOVIE_DETAIL_URL, {
                    params: {
                        movieId: id
                    }
                });
                if (response.status !== 200) {
                    setError(response.data.error)
                } else {
                    console.log(response.data)
                    setMovie(response.data)

                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message)
            } finally {
                console.log("Fetch finished")
                setLoading(false)
            }
            return () => {
                document.body.style.backgroundImage = null;
            }
        }
        fetchMovieDetail()
    }, []);

    return (
        <>
            <div className="bg" style={{backgroundImage: `url(${movie?.backdropPath})`}}>
            </div>
            <Container>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (<p>Error: {error}</p>) :
                    (
                        <Row style={{marginTop: '15%'}}>
                            <Col xs={12}>
                                {movie && Object.keys(movie).length > 0 ?
                                    <MovieDetail movie={movie}/>
                                    : null}
                            </Col>
                        </Row>
                    )
                }
            </Container>
        </>
    )
}