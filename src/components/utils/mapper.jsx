import { Link } from 'react-router-dom'
export const mapFunction = (arr) => {
    return (
        <div>
            {arr.map((article) => {
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
    )
}