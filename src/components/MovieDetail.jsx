import {Image, Stack} from "react-bootstrap";
import GenrePill from "./GenrePill.jsx";
import {Bookmark, BookmarkFill, HandThumbsDown, HandThumbsUp, Heart} from "react-bootstrap-icons";
import {useState} from "react";

export const MovieDetail = ({movie}) => {
    const [bookmark, setBookmark] = useState(false)

    function convertMinutes(mins) {
        let hours = Math.floor(mins / 60);
        let minutes = mins % 60;
        return `${hours}hrs, ${minutes}mins`;
    }

    const handleBookmarkClick = () => {
        setBookmark(!bookmark)
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: '40%', height: '50%', borderRadius: '10px'}} src={movie.posterPath}/>
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
                <div>
                    <p style={{fontSize: '1.4rem', color: "white"}}>{movie.overview}</p>
                    <p style={{fontSize: '1.4rem', color: "white"}}>Runtime: {convertMinutes(movie.runtime)}</p>
                </div>
                <div style={{display: "flex", gap: '10%', marginTop: '5%'}}>
                    {bookmark === false ? <Bookmark size="48" color="white" onClick={handleBookmarkClick}/> :
                        <BookmarkFill size='48' color='white' onClick={handleBookmarkClick}/>}
                    <HandThumbsUp size="48" color='white'/>
                    <HandThumbsDown size="48" color='white'/>
                </div>
            </Stack>
        </div>
    );
}