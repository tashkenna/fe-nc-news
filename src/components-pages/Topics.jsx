import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "../api/api";
import { Categories } from "../components/Categories";
import { Filter } from "../components/Filter";
import { ArticleCard } from "../components/ArticleCard";
import { sortArticles } from "../components/Utils/sortArticles";

export const Topics = () => {
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [sortingOption, setSortingOption] = useState("date descending");
const [searchParams, setSearchParams] = useSearchParams()

const sortByQuery = searchParams.get("topic")

console.log(sortByQuery)

useEffect(() => {
    setLoading(true);
    getArticles()
      .then(({ articles }) => {
        const topicArticles = articles.filter(
          (article) => article.topic === topic
        );
        setArticles(topicArticles);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  },[topic]);

const sortedArticles = sortArticles(articles, sortingOption);

return (
  <div className="articles-page">
    <h1 className="page-header">articles on {topic}</h1>

    <Categories />
   
    <section className="filter">
      <p className="filter-text">sort by:</p>
      <Filter onChange={(value) => setSortingOption(value)} />
    </section>

    {loading && <p className="loading-text">loading articles..</p>}
    {error && <p className="loading-text">error fetching content</p>}

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

}