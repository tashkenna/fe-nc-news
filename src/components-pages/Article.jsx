import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID, patchArticleVotes } from "../api/api";
import { Comments } from "../components/Comments";
export const Article = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [userVotes, setUserVotes] = useState(0);

  useEffect(() => {
    getArticleByID(id).then(({ article }) => {
      setArticle(article);
      setLoading(false);
    });
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    setUserVotes((currentUserVotes) => currentUserVotes + 1);
  
    patchArticleVotes(id, userVotes + 1)
      .then((response) => {
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <div className="article-page">
      <section className="article">
        <h1>{article.title}</h1>
        <p>Topic: {article.topic}</p>
        <img src={article.article_img_url} alt="Article" />
        <h3>Written by {article.author}</h3>
        <p>{article.body}</p>
        <h3>Votes: {article.votes + userVotes}</h3>
        <button
          onClick={handleClick}
          disabled={userVotes > 0}
          className="vote-button"
        >
          vote
        </button>
      </section>

      <Comments id={id} />
    </div>
  );
};