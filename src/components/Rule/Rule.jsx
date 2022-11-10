// NPM dependencies
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faEdit,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

// local dependencies
import "./Rule.css";
import { useNavigate } from "react-router-dom";
import LikeBtn from "../LikeBtn/LikeBtn";
import { ThemeContext } from "../../ThemeContext";

/**
 * Display a single rule.
 */
function Rule({ rule, index, onDelete }) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [folded, setFolded] = useState(false);

  // useEffect(() => () => {
  //   alert('Rules unmounted');
  // }, []);

  // useEffect(() => {
  //   alert('Component updated');
  // });

  return (
    <section
      className={`rule ${
        theme === "dark" ? "dark__container" : "light__container"
      }`}
    >
      <header
        className="rule__header"
        role="presentation"
        onClick={() => setFolded(!folded)}
      >
        {rule.title}{" "}
        {folded ? (
          <FontAwesomeIcon icon={faChevronDown} className="fold-icon" />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} className="fold-icon" />
        )}
      </header>
      {!folded && (
        <>
          <p className="rule__content">{rule.description}</p>
          <footer className="rule__footer">
            <div className="rule__action-buttons">
              <LikeBtn defaultCount={rule.likes} type="like" />
              <LikeBtn defaultCount={rule.dislikes} type="dislike" />
              <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(index)} />
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => navigate(`/edit/${index}`)}
              />
            </div>
          </footer>
        </>
      )}
    </section>
  );
}

export default Rule;
