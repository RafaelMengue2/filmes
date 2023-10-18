import React, { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const KEY = process.env.REACT_APP_KEY;

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [KEY]);

  const filteredMovies = movies.filter((movie) => {
    // Filtrar por gênero se um gênero estiver selecionado
    if (genre) {
      const genreIds = movie.genre_ids || [];
      return genreIds.includes(parseInt(genre));
    }

    // Filtrar por consulta de pesquisa se houver uma consulta
    if (searchQuery) {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    }

    return true; // Mostrar todos os filmes se nenhum filtro estiver ativo
  });

  return (
    <Container>
      <h1>Filmes</h1>
      <div>
        <select onChange={handleGenreChange} value={genre}>
          <option value="">Selecione um gênero</option>
          <option value="28">Ação</option>
          <option value="35">Comédia</option>
          <option value="18">Drama</option>
          <option value="27">Terror</option>
          <option value="10749">Romance</option>
          {/* Adicione mais opções de gênero conforme necessário */}
        </select>
        <input
          type="text"
          placeholder="Pesquisar filmes"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      <MovieList>
        {filteredMovies.map((movie) => (
          <Movie key={movie.id}>
            <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
            <span>{movie.title}</span>
            <Link to={`/${movie.id}`}>
              <Btn>Detalhes</Btn>
            </Link>
          </Movie>
        ))}
      </MovieList>
    </Container>
  );
}

export default Home;
