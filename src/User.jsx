import { useState } from "react";
import { Counter } from "./Counter";

export function Movielist({
  poster,
  name,
  rating,
  summary,
  movies,
  setMovie,
  id,
}) {
  const [show, setShow] = useState(false);

  const delMovie = (id) => {
    fetch(`https://6971d21b32c6bacb12c49d77.mockapi.io/movieslist/${id}`)
      .then((response) => response.json())
      .then(() => {
        const remainingMovies = movies.filter((a) => a.id !== id);
        setMovie(remainingMovies);
      });
  };

  return (
    <div className="movie-container">
      <img src={poster}></img>
      <div className="movie-information">
        <p>{name}</p>
        <p>⭐ {rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle summary</button>
      {show ? (
        <div className="summary">
          <p>{summary}</p>
        </div>
      ) : (
        ""
      )}
      <button onClick={() => delMovie(id)}>DELETE</button>
      <Counter />
    </div>
  );
}
