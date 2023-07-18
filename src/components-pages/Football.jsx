import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { Categories } from "../components/Categories";
import { ArticleCard } from "../components/ArticleCard";
import { sortArticles } from "../components/Utils/sortArticles";
import { Filter } from "../components/Filter";

export const Football = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortingOption, setSortingOption] = useState("date descending");

  useEffect(() => {
    setLoading(true);
    getArticles()
      .then(({ articles }) => {
        const footballArticles = articles.filter(
          (article) => article.topic === "football"
        );
        setArticles(footballArticles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <div className="loading-text">loading articles...</div>;
  }


  const sortedArticles = sortArticles(articles, sortingOption)

  return (
    <div className="articles-page">
      <h1 className="page-header">articles on football</h1>

      <Categories />

      <section className="filter">
        <p className="filter-text">sort by:</p>
        <Filter onChange={(value) => setSortingOption(value)} />
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
