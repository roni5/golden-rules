import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import "./LikeBtn.css";

function LikeBtn({ type, defaultCount = 0 }) {
  const [count, setCount] = useState(defaultCount);
  return (
    <button
      type="button"
      onClick={() => setCount(count + 1)}
      className={`like-button ${type === "like" ? "like" : "dislike"}`}
      title="+1"
    >
      {count}{" "}
      <FontAwesomeIcon icon={type === "like" ? faThumbsUp : faThumbsDown} />
    </button>
  );
}

export default LikeBtn;
