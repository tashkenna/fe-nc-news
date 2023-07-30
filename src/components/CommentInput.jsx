import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";

import { postCommentByArticleID } from "../api/api";

export const CommentInput = (params) => {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [commentWarning, setCommentWarning] = useState(false);
  const [commentEmpty, setCommentEmpty] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const { user } = useContext(UserContext);
  const { id, onCommentPosted } = params;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.length > 1000) {
      setCommentWarning(true);
      return;
    }

    if (comment.length === 0) {
      setCommentEmpty(true);
      return;
    }

    if (user.length === 0) {
      setLoggedOut(true);
      return;
    }

    setLoading(true);
    setError(false);

    const body = {
      username: user,
      body: comment,
    };
    toast.promise(
      postCommentByArticleID(id, body)
        .then((data) => {
          setLoading(false);
          onCommentPosted(data);
          setComment("");
        })

        .catch((err) => {
          setError(true);
        }),
      {
        loading: "comment posting...",
        success: "comment posted",
        error: "there was an error posting your comment, please try again",
      }
    );
  };

  const handleCommentChange = (e) => {
    const commentValue = e.target.value;
    setComment(commentValue);
    setCommentEmpty(false);
    if (commentValue.length > 300) {
      setCommentWarning(true);
    } else {
      setCommentWarning(false);
    }
  };

  return (
    <div className="post-comment-card">
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-input"
          placeholder="type comment here"
          value={comment}
          onChange={handleCommentChange}
        />
        {commentWarning ? (
          <p>comment is {comment.length - 300} characters over limit</p>
        ) : null}

        {commentEmpty ? <p>comment is empty</p> : null}
        {loggedOut ? <p>please log in to comment</p> : null}
        {error ? <p>error posting comment</p> : null}

        <button
          className="comment-button"
          type="submit"
          disabled={commentWarning || loading || commentEmpty || loggedOut}
          style={{
            cursor:
              commentWarning || loading || commentEmpty || loggedOut
                ? "not-allowed"
                : "pointer",
            color:
              commentWarning || loading || commentEmpty || loggedOut
                ? "grey"
                : "white",
          }}
        >
          comment
        </button>
      </form>
    </div>
  );
};
