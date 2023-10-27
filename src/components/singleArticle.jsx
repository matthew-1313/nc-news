import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticlesById } from "../../api"
import { getArticleComments } from "../../api"
import { LoadComments } from "./utils/loadComments"
import { PostComment } from "./PostComment"
import { OneArticleMapper } from "./OneArticleMapper"
import { VoteSection } from "./voting"

export const SinlgleArticle = () => {
const [singleArticle, setSingleArticle] = useState()
const [comments, setComments] = useState()
const { article_id } = useParams()

useEffect(() => {
    getArticlesById(article_id).then((article) => {
        setSingleArticle(article)
    })
}, [singleArticle])

useEffect(() => {
    getArticleComments(article_id).then((comments) => {
        if (comments) {
            setComments(comments.reverse())
        } else {
            setComments([{
                "comment_id": '',
                "body": "be the first to comment on this post",
                "article_id": '',
                "author": "",
                "votes": null,
                "created_at": ""
                }])
        }
    })
}, [comments])


    if (!singleArticle || !comments) {
        return (
            <h2>Loading Article...</h2>
        )
    } else {
    return (
        <div>

        <VoteSection article_id={article_id} setSingleArticle={setSingleArticle} singleArticle={singleArticle}/>
        <OneArticleMapper singleArticle={singleArticle}/>
        <PostComment setComments={setComments} article_id={article_id}/>
        <LoadComments comments={comments}/>


        </div>
    )
    }
}