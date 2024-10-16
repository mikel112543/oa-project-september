import {Card} from "react-bootstrap";
import '../styles/MovieCard.css'


function MovieCard({title, popularity, releaseDate, posterPath}) {
    return (
        <Card className='movie-card'>
            <Card.Img variant='top' src={posterPath} alt="Placeholder image"/>
            <Card>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <h4>
                        {releaseDate}
                    </h4>
                </Card.Text>
            </Card>
        </Card>
    )
}

export default MovieCard