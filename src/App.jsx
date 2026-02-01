import "./index.css";
import { Movieslist } from "./Movieslist";
import { Counter } from "./Counter";

import { Userlist } from "./Userlist";
import { User } from "./User.1";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";

export default function App() {
  // const userdetails = [

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
        <Route path="movies" element={<Movieslist />} />
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
