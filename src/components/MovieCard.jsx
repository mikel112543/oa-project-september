import {Card} from "react-bootstrap";
import '../styles/MovieCard.css'
import {useNavigate} from "react-router-dom";


function MovieCard({title, releaseDate, movieId, posterPath}) {
    const navigate = useNavigate();

    const onMovieCardClick = () => {
        navigate(`/movies/${movieId}`);
    }

    return (
        <Card className='movie-card' onClick={onMovieCardClick}>
            <Card.Img variant='top' src={posterPath} alt="Placeholder image"/>
        </Card>
    )
}

export default MovieCard