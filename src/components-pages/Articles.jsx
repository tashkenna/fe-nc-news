import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { ArticleCard } from "../components/ArticleCard";
import { Link } from "react-router-dom";


export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
    .then(({ articles }) => {
      setArticles(articles);
      setLoading(false);
    })
    .catch((err) => {
    })
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="articles-page">
    <h1 className="page-header">articles</h1>
    <section className="topic-buttons">
    <button className="topic-button">all</button>
    <button className="topic-button">coding</button>
    <button className="topic-button">cooking</button>
    <button className="topic-button">football</button>
    </section>
    <section className="articles-container"> 

    {articles.map(article => 
        <ArticleCard
            key={article.article_id}
            title={article.title}
            topic={article.topic}
            article_img_url={article.article_img_url}
            article_id={article.article_id}
        /> 
    )
    }
  
    </section>
    </div>
   
  )
};
