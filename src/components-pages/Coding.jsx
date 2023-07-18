import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { Categories } from "../components/Categories";
import { ArticleCard } from "../components/ArticleCard";
import { Filter } from "../components/Filter";
import { sortArticles } from "../components/Utils/sortArticles";

export const Coding = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortingOption, setSortingOption] = useState("date descending");

  useEffect(() => {
    setLoading(true);
    getArticles()
      .then(({ articles }) => {
        const codingArticles = articles.filter(
          (article) => article.topic === "coding"
        );
        setArticles(codingArticles);
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
      <h1 className="page-header">articles on coding</h1>

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
