export class MovieDTO {
    constructor(title, popularity, releaseDate, posterPath, movieId, backdropPath, genres, overview, runtime) {
        this.title = title;
        this.popularity = popularity;
        this.releaseDate = releaseDate;
        this.posterPath = `https://image.tmdb.org/t/p/original${posterPath}`;
        this.movieId = movieId;
        this.backdropPath = `https://image.tmdb.org/t/p/original${backdropPath}`;
        this.genres = genres || [];
        this.overview = overview;
        this.runtime = runtime;
    }
}