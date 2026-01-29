import { useState } from "react";
import { Counter } from "./Counter";

export function Movielist({ poster, name, rating, summary }) {
  const [show, setShow] = useState(false);

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
      <Counter />
    </div>
  );
}
