import { useEffect, useState } from "react";
import { getCommentsByArticleID, postCommentByArticleID } from "../api/api";

export const CommentInput = (params) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [error, setError] = useState(false)
  const [commentWarning, setCommentWarning] = useState(false)
  const [commentEmpty, setCommentEmpty] = useState(false)

  const { id, onCommentPosted} = params;

  useEffect(() => {
  }, [commentSubmitted]);



  const handleSubmit = (e) => {
    e.preventDefault();


    if (comment.length > 1000) {
        setCommentWarning(true);
        return; 
      }

      if(comment.length === 0) {
        setCommentEmpty(true)
        return
      }

    setLoading(true);
    setError(false)
    
    const body = {
        username: "grumpy19",
      body: comment
    };

    postCommentByArticleID(id, body)
      .then((data) => {
        setLoading(false);
        setCommentSubmitted(true);
        onCommentPosted()
        setComment("")
      })

      .catch((err) => {
        setError(true)
        setLoading(false);
        console.log(err);
      });
  };


  const handleCommentChange = (e) => {
    const commentValue = e.target.value;
    setComment(commentValue);
    setCommentEmpty(false)
    if (commentValue.length > 300) {
      setCommentWarning(true);
    } else {
      setCommentWarning(false);
    }
  };

  return (
    <div className="post-comment-card">
    {loading ? <p>Loading comment...</p> : null }
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-input"
          placeholder="type comment here"
          value={comment}
          onChange={handleCommentChange}
        />
        {commentWarning ? <p>Comment is {comment.length - 300} characters over limit</p> : null}
        {commentEmpty ? <p>Comment is empty</p> : null}
      {error ? <p>Error posting comment</p> : null}
        <button className="comment-button" type="submit" disabled={commentWarning}>comment</button>
      </form>
      
    </div>
  );
};
