export const CommentCard = (props) => {
const {votes, author, body} = props

return (
    <div className="comment-card">
        <p className="comment-author">{author}</p>
        <p className="comment-body">{body}</p>
        <p className="comment-votes">votes: {votes}</p>
    </div>
)
}