import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticlesById } from "../../api"
import { getArticleComments } from "../../api"
import { LoadComments } from "./utils/loadComments"
import { PostComment } from "./PostComment"
import { OneArticleMapper } from "./OneArticleMapper"

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
        setComments(comments.reverse())
    })
}, [comments])


    if (!singleArticle || !comments) {
        return (
            <h2>Loading Article...</h2>
        )
    } else {
    return (
        <div>

        <OneArticleMapper singleArticle={singleArticle}/>
        <PostComment setComments={setComments} article_id={article_id}/>
        <LoadComments comments={comments}/>


        </div>
    )
    }
}