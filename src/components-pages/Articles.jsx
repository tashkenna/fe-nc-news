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
      console.log(err)
    })
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="articles-page">
    <h1 className="page-header">Articles</h1>
    

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
