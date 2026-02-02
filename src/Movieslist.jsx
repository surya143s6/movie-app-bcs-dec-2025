import { useEffect, useState } from "react";
import { Movielist } from "./User";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function Movieslist({ movies, setMovie }) {
  // const [movies, setMovie] = useState([]);

  // useEffect(() => {
  //   fetch("https://6971d21b32c6bacb12c49d77.mockapi.io/movieslist")
  //     .then((response) => response.json())
  //     .then((surya) => setMovie(surya));
  // });

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const addMovie = {
    name: name,
    poster: poster,

    rating: rating,
    summary: summary,
  };

  return (
    <section className="banner-info">
      <div className="movie-details">
        <TextField
          label="name"
          variant="outlined"
          onChange={(name) => setName(name.target.value)}
          value={name}
        />

        <TextField
          label="poster"
          variant="outlined"
          onChange={(poster) => setPoster(poster.target.value)}
          value={poster}
        />
        <TextField
          label="ratings"
          variant="outlined"
          onChange={(rating) => setRating(rating.target.value)}
          value={rating}
        />
        <TextField
          label="Outlined"
          variant="outlined"
          onChange={(summary) => setSummary(summary.target.value)}
          value={summary}
        />
      </div>
      <div className="moviesbutton">
        <Button
          variant="contained"
          onClick={() => setMovie([...movies, addMovie])}
        >
          ADD Movie
        </Button>
      </div>
      {movies.map((movie) => (
        <Movielist
          id={movie.id}
          poster={movie.poster}
          name={movie.name}
          rating={movie.rating}
          summary={movie.summary}
          movies={movies}
          setMovie={setMovie}
        />
      ))}
    </section>
  );
}
