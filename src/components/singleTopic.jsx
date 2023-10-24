import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getArticles } from "../../api"
import { Link } from "react-router-dom"

export const SingleTopic = () => {
    const [thisTopic, setThisTopic] = useState()
    const { topic } = useParams()

    useEffect(() => {
        getArticles().then((articles) => {
            const thisTopicArray = []
            for (let i = 0; i< articles.length; i++){
                if (articles[i].topic === topic){
                    thisTopicArray.push(articles[i])
                }
            }
            setThisTopic(thisTopicArray)
        })
    }, [thisTopic])

    if (!thisTopic) {
        return (
            <h2>Loading Articles...</h2>
        )
    } else {
    return (
        <div>
            <div className="grid-container" >
                {thisTopic.map((article) => {
                    return (
                        <Link to={`/articles/${article.article_id}`} key={`article_${article.article_id}`}>
                        <div id="single_article">
                            <h2>{article.title}</h2>
                            <img className="thumbnail" src={article.article_img_url}/>
                            <p> Article#<b>{article.article_id}</b>   |  By: <b>{article.author}</b></p>
                            <p>Topic: <b>{article.topic}</b>  |  Votes: <b>{article.votes}</b></p>
                        </div>
                        </Link>
                    )
                })}
                </div>
        </div>
    )
    }
}