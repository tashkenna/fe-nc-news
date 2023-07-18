import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID, patchArticleVotes } from "../api/api";
import { Comments } from "../components/Comments";
export const Article = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [userVotes, setUserVotes] = useState(0);
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getArticleByID(id).then(({ article }) => {
      setArticle(article);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
      setIsError(true)
    })
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>;
  }

 
  const handleClick = () => {
    const newVotes = userVotes === 0 ? 1 : -1;

    setUserVotes((prevVotes) => prevVotes + newVotes);

    patchArticleVotes(id, newVotes)
      .then(() => {
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
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
          className="vote-button"
        >
          vote
        </button>
        {isError ? <p>somethings gone wrong, please try again</p> : ""}
      </section>

      <Comments id={id} />
    </div>
  );
};