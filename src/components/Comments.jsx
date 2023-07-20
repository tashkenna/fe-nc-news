import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "../api/api";
import { CommentCard } from "./CommentsCard";
import { CommentInput } from "./CommentInput";


export const Comments = (params) => {
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);
  const [commentPosted, setCommentPosted] = useState(false);

const {id} = params

  useEffect(() => {
    getCommentsByArticleID(id)
      .then(({ comments }) => {
        comments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setComments(comments);
        setLoading(false);
      })
      .catch((err) => {
      });
  }, [id]);

  if (loading) {
    return <div className="loading-text">loading comments...</div>;
  }


  const handleCommentPosted = ({comment}) => {
    const newComment = {...comment, votes: 0}
    setComments((prevComments) => [newComment, ...prevComments])
    setCommentPosted(!commentPosted);
  };

  return (
    <div className="comment-section">
      {comments === undefined ? <h2>No comments</h2> : (
        <>
          <h2>Comments</h2>
          <CommentInput
      id={id}
      onCommentPosted={handleCommentPosted}
      />
          {comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              author={comment.author}
              body={comment.body}
              votes={comment.votes}
              comment_id={comment.comment_id}
            />
          ))}
        </>
      )
      }
    
    </div>
  );
  
};
