import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticlesById } from "../../api"

export const SinlgleArticle = () => {
const [singleArticle, setSingleArticle] = useState()
const { article_id } = useParams()
//console.log('single:', article_id)

useEffect(() => {
    getArticlesById(article_id).then((article) => {
        setSingleArticle(article)
    })
}, [singleArticle])

    if (!singleArticle) {
        return (
            <p>kjhg</p>
        )
    } else {
    return (
        <div className="articleCard" >
            <div id="articleCard" key={`article_${singleArticle.article_id}`}>
                <h2>{singleArticle.title}</h2>
                <img className="thumbnail" src={singleArticle.article_img_url}/>
                <p> Article#<b>{singleArticle.article_id}</b>   |  By: <b>{singleArticle.author}</b>   |  Topic: <b>{singleArticle.topic}</b>  |  Votes: <b>{singleArticle.votes}</b></p>
                <p>{singleArticle.body}</p>
            </div>
        </div>
    )
    }
}