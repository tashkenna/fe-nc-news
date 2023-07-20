import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { ArticleCard } from "../components/ArticleCard";
import { Categories } from "../components/Categories";
import { useSearchParams } from "react-router-dom";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()
  const topicQuery = searchParams.get("topic")

  useEffect(() => {
    getArticles(topicQuery)
      .then(({ articles }) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, [topicQuery]); 


  return (
    <div className="articles-page">
      <h1 className="page-header">all articles</h1>
      <Categories />
    
        {loading && <p className="loading-text">loading articles..</p>}
        {error && <p className="loading-text">error fetching content</p>}

      <section className="articles-container">
        {articles.map((article) => (
          <ArticleCard
            key={article.article_id}
            title={article.title}
            topic={article.topic}
            article_img_url={article.article_img_url}
            article_id={article.article_id}
          />
        ))}
      </section>
    </div>
  );
};
