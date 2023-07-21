import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const CommentCard = (props) => {
    const { votes, author, body, id, handleDelete, deleteLoading, deleteError} = props;
    const { user } = useContext(UserContext);
  
    return (
      <div className="comment-card">
        <p className="comment-author">{author}</p>
        <p className="comment-body">{body}</p>
        <p className="comment-votes">votes: {votes}</p>
        {user === author && (<button disabled={deleteLoading} className="comment-button" onClick={()=>handleDelete(id)}  style={{ cursor: deleteLoading? 'not-allowed' : 'pointer',
        color: deleteLoading ? "grey" : "white"}}>delete</button>)}
      </div>
    );
  };