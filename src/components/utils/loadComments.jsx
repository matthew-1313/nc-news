export const LoadComments = ({comments}) => {
// console.log(comments)

    return (
        <div>
                {comments.map((comment) => {
                    return (
                        <div className="singleComment" key={comment.comment_id}>
                        <br/>
                        <p className="commentHead">Comment#<b>{comment.comment_id}</b></p>
                        <p>posted by <b>{comment.author}</b> | Votes: <b>{comment.votes}</b></p>
                        <br/>
                        <p className="commentBody">{comment.body}</p>
                        <br/>
                        </div>
                    )
                })}
            </div>
    )
}