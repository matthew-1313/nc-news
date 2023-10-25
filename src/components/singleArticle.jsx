import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticlesById } from "../../api"
import { getArticleComments } from "../../api"
// import { LoadComments } from "./utils/loadComments"

export const SinlgleArticle = () => {
const [singleArticle, setSingleArticle] = useState()
const [comments, setComments] = useState()
const { article_id } = useParams()
//console.log('single:', article_id)

useEffect(() => {
    getArticlesById(article_id).then((article) => {
        setSingleArticle(article)
    })
}, [singleArticle])

useEffect(() => {
    getArticleComments(article_id).then((comments) => {
        // console.log(comments)
        setComments(comments)
    })
}, [comments])


    if (!singleArticle || !comments) {
        return (
            <h2>Loading Article...</h2>
        )
    } else {
    return (
        <div>
        <div className="articleCard" >
            <div id="articleCard" key={`article_${singleArticle.article_id}`}>
                <h2>{singleArticle.title}</h2>
                <img className="thumbnail" src={singleArticle.article_img_url}/>
                <p> Article#<b>{singleArticle.article_id}</b>   |  By: <b>{singleArticle.author}</b>   |  Topic: <b>{singleArticle.topic}</b>  |  Votes: <b>{singleArticle.votes}</b></p>
                <p className="articleBody">{singleArticle.body}</p>
            </div>
        </div>
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
        </div>
    )
    }
}