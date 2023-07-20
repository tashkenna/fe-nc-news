import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { ArticleCard } from "../components/ArticleCard";
import { Categories } from "../components/Categories";
import { Filter } from "../components/Filter";
import { sortArticles } from "../components/Utils/sortArticles";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortingOption, setSortingOption] = useState("date descending");
  const [error, setError] = useState(false);

  useEffect(() => {
    getArticles()
      .then(({ articles }) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
    
  }, []);

  const sortedArticles = sortArticles(articles, sortingOption);

  return (
    <div className="articles-page">
      <h1 className="page-header">all articles</h1>
      <Categories />
      <section className="filter">
        <p className="filter-text">sort by:</p>
        <Filter onChange={(value) => setSortingOption(value)} />

        {loading && <p className="loading-text">loading articles..</p>}
        {error && <p className="loading-text">error fetching content</p>}

      </section>
      <section className="articles-container">
        {sortedArticles.map((article) => (
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
