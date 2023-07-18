// import { useEffect, useState } from "react";
// import { getCommentsByArticleID, postCommentByArticleID } from "../api/api";

// export const CommentInput = (params) => {
//   const [comment, setComment] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [commentSubmitted, setCommentSubmitted] = useState(false);

//   const { id, onCommentPosted} = params;

//   useEffect(() => {
//   }, [commentSubmitted]);



//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setLoading(true);
    
//     const body = {
//         username: "grumpy19",
//       body: comment
//     };
//     console.log(id, body)
//     postCommentByArticleID(id, body)
//       .then((data) => {
//         setLoading(false);
//         setCommentSubmitted(true);
//         onCommentPosted()
//         setComment("")
//       })

//       .catch((err) => {
//         setLoading(true);
//         console.log(err);
//       });
//   };

//   return (
//     <div className="post-comment-card">
//       <form className="comment-form" onSubmit={handleSubmit}>
//         <textarea
//           className="comment-input"
//           placeholder="type comment here"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <button type="submit">Create Post</button>
//       </form>
//     </div>
//   );
// };
