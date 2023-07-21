import { useContext, useEffect, useState } from "react";
import { deleteComments, getCommentsByArticleID } from "../api/api";
import { CommentCard } from "./CommentsCard";
import { CommentInput } from "./CommentInput";
import { UserContext } from "../context/UserContext";

export const Comments = (params) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(false);

  const { id } = params;

  useEffect(() => {
    setLoading(true);
    getCommentsByArticleID(id)
      .then(({ comments }) => {
        comments.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setComments(comments);
        setLoading(false);
      })
      .catch((err) => {});
  }, [id]);

  if (loading && comments.length > 0) {
    return <div className="loading-text">loading comments...</div>;
  }

  const handleCommentPosted = ({ comment }) => {
    const newComment = { ...comment, votes: 0 };
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  const handleDelete = (comment_id) => {
    setDeleteLoading(true);
    deleteComments(comment_id)
      .then(() => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== comment_id)
        );
        setDeleteLoading(false);
      })
      .catch((err) => {
        setDeleteError(true);
      });
  };

  return (
    <div className="comment-section">
      {comments === [] ? (
        <>
          <h2>Comments</h2>
          <CommentInput id={id} onCommentPosted={handleCommentPosted} />
          <h2>No comments</h2>
        </>
      ) : (
        <>
          <h2>Comments</h2>
          <CommentInput id={id} onCommentPosted={handleCommentPosted} />
          
          {deleteLoading && <p>deleting...</p>}
          {deleteError && <p>there was an error deleting your comment, please try again</p>}

          {comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              author={comment.author}
              body={comment.body}
              votes={comment.votes}
              id={comment.comment_id}
              comment_id={comment.comment_id}
              handleDelete={handleDelete}
            />
          ))}
        </>
      )}
    </div>
  );
};
