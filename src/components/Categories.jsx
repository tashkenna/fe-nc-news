import { Link } from "react-router-dom"
import { getTopics } from "../api/api";
import { useEffect, useState } from "react";

export const Categories = () => {

  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(false)

  useEffect(()=> {
    getTopics().then(({topics}) => {
  
      const topicSlugs = topics.map((topic) => topic.slug)
      setTopics(topicSlugs)
     
      })
    .catch(err => {
      setError(true)
    })
  }, [] )


  console.log(topics)

  return (
    <div className="topic-buttons">
    {error && <p>error retrieving topics</p>}
      <Link to="/articles" className="topic-button">
        all
      </Link>

      {topics.map(topic => 
        <Link to={`/articles/${topic}`} className="topic-button">
        {topic}
      </Link>
      )}
    
    </div>
  );
};
