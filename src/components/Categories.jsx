import { Link } from "react-router-dom"
import { getTopics } from "../api/api";
import { useEffect, useState } from "react";

export const Categories = () => {

  useEffect(()=> {
    getTopics().then(data => {
     

      })
    .catch(err => {

    })
  }, [] )


  return (
    <div className="topic-buttons">

      <Link to="/articles" className="topic-button">
        all
      </Link>
      <Link to="/articles/coding" className="topic-button">
        coding
      </Link>
      <Link to="/articles/cooking" className="topic-button">
        cooking
      </Link>
      <Link to="/articles/football" className="topic-button">
        football
      </Link>
    </div>
  );
};
