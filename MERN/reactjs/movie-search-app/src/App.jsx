import { useEffect, useState } from "react";
import Result from "./Result";
import Search from "./Search";


function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const getPopularMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1');

    const data = await response.json();
    setMovies(data.results);
  }

  const getMoviesByQuery = async () => {
    const SEARCHAPI =
      `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`;

    const response = await fetch(SEARCHAPI);
    const data = await response.json();
    setMovies(data.results);
  }

  useEffect(
    () => {
      if (query != "") {
        getMoviesByQuery()
      } else {
        getPopularMovies();
      }
    },
    [query]
  )

  useEffect(
    () => {
      if (query == "") {
        getPopularMovies();
      }
    },
    []
  )

  return (
    <div className="main">
      <Search query={query} handler={setQuery} />
      <Result movies={movies} />
    </div>
  );
}

export default App;
