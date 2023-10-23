import { useEffect, useState } from "react"
import { getArticles } from "../../api"
import { all } from "axios"

export const Articles = () => {
    const [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        getArticles().then((articles) => {
            setAllArticles(articles)
        })
    }, [])

    return (
        <div>
            <p>articles</p>
            <div className="grid-container" >
                {allArticles.map((article) => {
                    return (
                        <div id="single_article" key={`article_${article.article_id}`}>
                            <h2>{article.title}</h2>
                            <img className="thumbnail" src={article.article_img_url}/>
                            <li>By: {article.author}</li>
                            <li>Topic: {article.topic}</li>
                            <li>id: {article.article_id}</li>
                            <li>Votes: {article.votes}</li>
                        </div>
                    )
                })}
                </div>
        </div>
    )
}