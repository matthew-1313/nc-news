import { useEffect, useState } from "react"
import { getArticles } from "../../api"
import { Link } from 'react-router-dom'


export const Articles = () => {
    const [allArticles, setAllArticles] = useState()

    useEffect(() => {
        getArticles().then((articles) => {


            //add sort function here

            setAllArticles(articles)
        })
    }, [allArticles])

    if (!allArticles) {
        return (
            <h2>Loading Articles...</h2>
        )
    } else {
    return (
        <div>
            <div className="sortSection">
                <h2>Sort by:</h2>
                <button>Article Number</button>
                <button>Title</button>
                <button>Author</button>
                <button>Votes</button>
            </div>
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
}