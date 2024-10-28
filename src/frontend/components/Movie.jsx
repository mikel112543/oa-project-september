import {Stack} from "react-bootstrap";
import {MovieCard} from "./MovieCard.jsx";

const Movie = ({title, releaseDate, poster}) => {

    return (
        <>
            <Stack>
                <Image className='image-hover-effect' src={poster} alt='https://picsum.photos/100/150'></Image>
                <h4>{title}</h4>
                <h5>Released On: {releaseDate}</h5>
                <MovieCard title={'Peter'} release={'1998'}/>
            </Stack>
        </>
    )
}
export default Movie