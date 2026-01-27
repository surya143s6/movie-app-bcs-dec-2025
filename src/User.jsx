export function Movielist({ poster, name, rating, summary }) {
  return (
    <div className="movie-container">
      <img src={poster}></img>
      <div className="movie-information">
        <p>{name}</p>
        <p>⭐ {rating}</p>
      </div>
      <div className="summary">
        <p>{summary}</p>
      </div>
    </div>
  );
}
