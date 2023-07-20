export const sortArticles = (articles, sortingOption) => {
    if (sortingOption === "votes ascending")
      {return articles.sort((a, b) => a.votes - b.votes);}

      if (sortingOption === "votes descending")
      {return articles.sort((a, b) => b.votes - a.votes);}
  
    if (sortingOption === "comment count ascending")
      {return articles.sort((a, b) => a.comment_count - b.comment_count);}

      if (sortingOption === "comment count descending")
      {return articles.sort((a, b) => b.comment_count - a.comment_count);}

      if (sortingOption === "date ascending")
      {return articles.sort((a, b) =>  new Date(a.created_at) - new Date(b.created_at))}
  
      return articles.sort((a, b) =>  new Date(b.created_at) - new Date(a.created_at))
  };