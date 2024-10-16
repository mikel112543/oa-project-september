import './App.css'
import {Col, Container, Row} from "react-bootstrap";
import {MovieList} from "./components/MovieList.jsx";
import {useState} from "react";
import CustomNavbar from "./components/CustomNavbar.jsx";
import MovieCard from "./components/MovieCard.jsx";
import SortButton from "./components/SortButton.jsx";
import './styles/SortButton.css'

const TRENDING_URL = "http://localhost:3000/movies/trendingMovies";
const POPULAR_URL = "http://localhost:3000/movies/popularMovies";
const SEARCH_URL = "http://localhost:3000/movies/search";


function App() {
    const [searchResults, setSearchResults] = useState([])
    // Declare the useStates for filter and search in the App (top level of the tree)
    // These states get passed into children components to be used for callback
    // Example of state lifting
    const [filterType, setFilterType] = useState('ascending')

    const handleSetFilterType = (filterType) => {
        setFilterType(filterType)
    }

    return (
        <>
            <CustomNavbar setSearchResults={setSearchResults} url={SEARCH_URL}/>
            <Container fluid>
                    {searchResults.length > 0 ? (
                        <>
                            <h1>Search Results</h1>
                            {searchResults.map((movie, index) => (
                                <Col key={index} sm={6} md={4}>
                                    <MovieCard title={movie.title} popularity={movie.popularity}
                                               releaseDate={movie.releaseDate}
                                               posterPath={movie.posterPath}/>
                                </Col>
                            ))}
                        </>
                    ) : (
                        <>
                            <div className="header-container">
                                <h1>Trending Movies</h1>
                                <SortButton filterType={filterType} setFilterType={handleSetFilterType} className="sort-button"/>
                            </div>
                            <Row>
                            <MovieList url={TRENDING_URL}/>
                            </Row>
                        </>
                    )}
            </Container>
        </>
    )
}

export default App
