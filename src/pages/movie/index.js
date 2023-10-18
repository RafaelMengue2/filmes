import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const KEY = process.env.REACT_APP_KEY;

    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const [cast, setCast] = useState([]);

    // Function to fetch movie details
    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`
            );
            const data = await response.json();
            setMovie(data);
        } catch (error) {
            console.error("Error fetching movie details", error);
        }
    };

    // Function to fetch genres of the movie
    const fetchGenres = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/genres?api_key=${KEY}&language=pt-BR`
            );
            const data = await response.json();
            setGenres(data.genres);
        } catch (error) {
            console.error("Error fetching movie genres", error);
        }
    };

    // Function to fetch the list of actors
    const fetchCast = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=pt-BR`
            );
            const data = await response.json();
            // Set a maximum of 7 actors
            setCast(data.cast.slice(0, 7));
        } catch (error) {
            console.error("Error fetching cast details", error);
        }
    };

    useEffect(() => {
        // Call the functions to fetch movie details, genres, and cast
        fetchMovieDetails();
        fetchGenres();
        fetchCast();
    }, [id]);

    return (
        <div>
            <nav>
                <h1>Movie</h1>
            </nav>
            <img
                className="img_movie"
                src={`${imagePath}${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="container">
                <h1>{movie.title}</h1>
                <h3>Data de lançamento: {movie.release_date}</h3>
                <div className="descricao">
                    <h4>Descrição: </h4>
                    <p className="movie-desc">{movie.overview}</p>
                </div>
                <div className="movie-details">
                    <h4>Gêneros: {genres.map((genre) => genre.name).join(", ")}</h4>
                    <h4>Atores: {cast.map((actor) => actor.name).join(", ")}</h4>
                </div>
                <Link to="/">
                    <button className="link_button">Voltar</button>
                </Link>
            </div>
        </div>
    );
};

export default Movie;
