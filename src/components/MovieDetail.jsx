import {Button, Image, Stack} from "react-bootstrap";
import GenrePill from "./GenrePill.jsx";

export const MovieDetail = ({movie}) => {

    function convertMinsToHoursMins(mins) {
        let hours = Math.floor(mins / 60);
        let minutes = mins % 60;
        return `${hours}hrs, ${minutes}mins`;
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{width: '40%', height: '50%'}} src={movie.posterPath}/>
            <Stack style={{marginLeft: '10%', marginTop: '25px', gap: 50}}>
                <div>
                <h1 style={{color: "white"}}>{movie.title}</h1>
                <p1 style={{fontSize: '1.2rem', color: "white"}}>{movie.releaseDate}</p1>
                </div>
                <div style={{display: "flex", gap: 50}}>
                    {movie.genres.map(genre => (
                        <GenrePill genre={genre.name}/>
                    ))}
                </div>
                <p style={{fontSize: '1.4rem', color: "white"}}>{movie.overview}</p>
                <p style={{fontSize: '1.4rem', color: "white"}}>Runtime: {convertMinsToHoursMins(movie.runtime)}</p>
                <div style={{display: "flex", gap: '20%' }}>
                    <Button>Add to Watch List</Button>
                    <Button>Like</Button>
                    <Button>Dislike</Button>
                </div>
            </Stack>
        </div>
    );
}