export const OneArticleMapper = ({singleArticle}) => {
    return (
        <div className="articleCard" >
            <div id="articleCard" key={`article_${singleArticle.article_id}`}>
                <h2>{singleArticle.title}</h2>
                <img className="thumbnail" src={singleArticle.article_img_url}/>
                <p> Article#<b>{singleArticle.article_id}</b>   |  By: <b>{singleArticle.author}</b>   |  Topic: <b>{singleArticle.topic}</b>  |  Votes: <b>{singleArticle.votes}</b></p>
                <p className="articleBody">{singleArticle.body}</p>
            </div>
        </div>
    )
}