import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../api/api";

export const Article = () => {
    const { id } = useParams();

    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArticleByID(id).then(({ article }) => {
          setArticle(article);
          setLoading(false);
        });
      }, []);

      if (loading) {
        return <div>Loading...</div>;
      }
    



    return (<div className="article-page">
        <section className="article">
         <h1>{article.title}</h1>
         <p>Topic: {article.topic}</p>
         <img src={article.article_img_url}/>
         <h3>Written by {article.author}</h3>
        
         {/* <p>Date written: {article.written_at}</p> */}
         <p>{article.body}</p>
         <h3>Votes: {article.votes}</h3>
        </section>
        </div>
    )

}