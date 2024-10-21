import {Col, Container, Row} from "react-bootstrap";
import {MovieCarousel} from "../components/MovieCarousel.jsx";
import {MovieList} from "../components/MovieList.jsx";
import "../styles/Home.css"

const TRENDING_URL = `http://localhost:3000/movies/trendingMovies`;
const POPULAR_URL = "http://localhost:3000/movies/popularMovies";

export const Home = () => {
    return (
        <>
            <div className='home-background'>
            </div>
            <Container fluid className='home-container'>
                <Row>
                    <Col style={{marginLeft: '5%'}}>
                        <h1 style={{color: "white"}}>Trending Movies</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} style={{marginTop: '20px'}}>
                        <MovieCarousel url={TRENDING_URL} title={"Trending Movies"}/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginLeft: '5%'}}>
                        <h1 style={{color: "white"}}>Popular Movies</h1>
                    </Col>
                </Row>
                <Row style={{marginTop: '20px', marginLeft: '5%', marginRight: '5%'}}>
                    <MovieList url={POPULAR_URL} title={"Popular Movies"}/>
                </Row>
            </Container>
        </>
    );
}