import "./index.css";
import { Movieslist } from "./Movieslist";
import { Counter } from "./Counter";

import { Userlist } from "./Userlist";
import { User } from "./User.1";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";
import { useParams } from "react-router";
import { Movielist } from "./User";

export default function App() {
  // const userdetails = [
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://6971d21b32c6bacb12c49d77.mockapi.io/movieslist")
      .then((response) => response.json())
      .then((surya) => setMovie(surya));
  }, []);

  return (
    // UI Starts
    <div className="App">
      {/* <Userlist /> */}
      {/* <Movieslist /> */}
      {/* <User /> */}
      {/* <Constgame /> */}
      <nav>
        <Link to="/users">Userlist</Link>
        <Link to="/movies">Movielist</Link>
      </nav>
      <Routes>
        <Route path="users" element={<Userlist />} />

        <Route
          path="movies"
          element={<Movieslist movies={movies} setMovie={setMovie} />}
        />
        <Route path="Movies/:id" element={<Moviedetails movies={movies} />} />
      </Routes>
    </div>
  );
}

function Constgame() {
  const [color, setColor] = useState("red");
  const styles = {
    backgroundColor: color,
  };

  return (
    <div>
      <input
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        type="text"
        placeholder="favourite color"
      />
      <h1>{color}</h1>
    </div>
  );
  <Colourboxes />;
}

function Colourboxes() {
  const boxes = {
    display: "flex",
    height: "1rem",
    width: "3rem",
    backgroundColor: "red",
  };
  const color = ["red", "pink", "purple", "orange"];
}

function Moviedetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];

  return (
    <h1>
      {id} - {movie.name}
    </h1>
  );
}
