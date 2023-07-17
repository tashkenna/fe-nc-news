import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "../api/api";
import { CommentCard } from "./CommentsCard";

export const Comments = (params) => {
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);

const {id} = params

  useEffect(() => {
    getCommentsByArticleID(id)
      .then(({ comments }) => {
        setComments(comments);
    
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <div>Comments loading...</div>;
  }
  return (
    <div className="comment-section">
      {comments === undefined ? <h2>No comments</h2> : (
        <>
          <h2>Comments</h2>
          {comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              author={comment.author}
              body={comment.body}
              votes={comment.votes}
            />
          ))}
        </>
      )
      }
    </div>
  );
  
};
