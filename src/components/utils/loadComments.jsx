// export const LoadComments = ({comments}) => {
//     const articleComments = comments[0]
//     return (
//         <div>
//             <div className="singleComment">
//                 {articleComments.map((comment) => {
//                     return (
//                         <div key={comment.comment_id}>
//                         <p className="commentHead">Comment#{comment.comment_id} posted by <b>{comment.author}</b> | Votes: <b>{comment.votes}</b></p>
//                         <p className="commentBody">{comment.body}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//             <p></p>
//         </div>
//     )
// }