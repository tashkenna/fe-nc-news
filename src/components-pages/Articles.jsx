import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";


export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    
    <div className="articles-container"> 

    {articles.map(article => 
        <ArticleCard
            key={article.article_id}
            title={article.title}
            topic={article.topic}
            article_img_url={article.article_img_url}
        /> 
    )
    }
  
    </div>
   
  )
};
