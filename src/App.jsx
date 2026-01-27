import { useState } from "react";
import "./index.css";
import { Movieslist } from "./Movieslist";

// import { Userlist } from "./Userlist";

export default function App() {
  // const userdetails = [

  return (
    // UI Starts
    <div className="App">
      {/* <Userlist /> */}
      {/* <Movieslist /> */}
      <Counter />
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setLike1] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setLike1(dislike + 1)}>👎{dislike}</button>
    </div>
  );
}
