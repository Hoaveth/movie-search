import { useEffect, useState } from "react";
import { IMDB_API_KEY } from "./utils/constant";
import SearchIcon from "./assets/search.svg";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${IMDB_API_KEY}s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <img
          src={SearchIcon}
          onClick={() => searchMovies(title)}
          alt="search"
        />
      </div>
      <div className="container">
        {movies ? (
          movies.map((movie) => <Card movie={movie} key={movie.imdbID} />)
        ) : (
          <h1>No movies found.</h1>
        )}
      </div>
    </div>
  );
}

export default App;
