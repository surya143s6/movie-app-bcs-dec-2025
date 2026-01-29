import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setLike1] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setLike1(dislike + 1)}>👎{dislike}</button>
      {/* <progress max={100} value={(like * 100) / (like + dislike)}></progress> */}
      <progress max={like + dislike} value={like}></progress>
    </div>
  );
}
