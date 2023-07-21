import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { ArticleCard } from "../components/ArticleCard";
import { Topics } from "../components/Topics";
import { useSearchParams } from "react-router-dom";
import { Error } from "./Error";


export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [apiError, setApiError] = useState(null)
 

  const topicQuery = searchParams.get("topic");
  const orderQuery = searchParams.get("order");
  const sortByQuery = searchParams.get("sort_by");
  

  useEffect(() => {
    getArticles(topicQuery,sortByQuery,orderQuery)
      .then(({ articles }) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setApiError(err)
      
      });
  }, [topicQuery,orderQuery,sortByQuery]);

  if(apiError) {
    return (
      <Error 
      errorStatus={apiError.response.status}
      errorMessage={apiError.response.data.msg}
      />
    )
  }

   const setSortOrder = (direction) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", direction);
    setSearchParams(newParams);
  };


    const setSortBy = (sort) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sort);
    setSearchParams(newParams);
  };

  return (
    <div className="articles-page">
      <h1 className="page-header">all articles</h1>
      <Topics />

      <section className="sortby">
      <section className="sortby-section">
      <p className="sortby-text">sort by</p>
      <button className="sortby-buttons" onClick={() => setSortBy("created_at")}>date</button>
      <button className="sortby-buttons" onClick={() => setSortBy("comment_count")}>comment count</button>
      <button className="sortby-buttons" onClick={() => setSortBy("votes")}>votes</button>
      </section>
      <section className="sortby-section">
      <p className="sortby-text">order</p>
      <button className="sortby-buttons" onClick={() => setSortOrder("asc")}>ascending</button>
      <button className="sortby-buttons" onClick={() => setSortOrder("desc")}>descending</button>
      </section>
      <p className="sortby-text-default">default: date descending</p>
      </section>

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
