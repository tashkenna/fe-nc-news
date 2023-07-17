import { Link } from "react-router-dom";

export const ArticleCard = (props) => {
  const { title, topic, article_img_url } = props;

  return (
    <div className="article-preview">
      <img
        className="article-preview-image"
        src={article_img_url}
        alt={`Image for article titled: ${title}`}
      />
      <Link>
        {" "}
        <h2 className="article-preview-title">{title}</h2>{" "}
      </Link>
      <p className="article-preview-topic">{topic}</p>
    </div>
  );
};
