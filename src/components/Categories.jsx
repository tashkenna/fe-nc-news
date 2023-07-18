import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="topic-buttons">
      <Link to="/articles" className="topic-button">
        all
      </Link>
      <Link to="/articles/coding" className="topic-button">
        coding
      </Link>
      <Link to="/articles/cooking" className="topic-button">
        cooking
      </Link>
      <Link to="/articles/football" className="topic-button">
        football
      </Link>
    </div>
  );
};
