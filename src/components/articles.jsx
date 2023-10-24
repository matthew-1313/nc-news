import { useEffect, useState } from "react"
import { getArticles } from "../../api"
import { mapFunction } from "./utils/mapper"
import { Link } from 'react-router-dom'
import { all } from "axios"


export const Articles = () => {
    const [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        getArticles().then((articles) => {
            setAllArticles(articles)
        })
    }, [allArticles])

    return (
        <div>
            <p>articles</p>
            <div className="grid-container" >
                {allArticles.map((article) => {
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