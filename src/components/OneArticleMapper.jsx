//usestate to set upVote AND downvote
//bring in setVotes
import { useState } from "react"

export const OneArticleMapper = ({setIsUpVote, setIsDownVote, singleArticle}) => {
    return (
        <div className="articleCard" >
            <div id="articleCard" key={`article_${singleArticle.article_id}`}>
                <h2>{singleArticle.title}</h2>
                <img className="thumbnail" src={singleArticle.article_img_url}/>
                <p> Article#<b>{singleArticle.article_id}</b>   |  By: <b>{singleArticle.author}</b>   |  Topic: <b>{singleArticle.topic}</b>  |  Votes: <b onClick={setIsUpVote(true)} className="upVote">+</b> <b>{singleArticle.votes}</b> <b onClick={setIsDownVote(true)} className="downVote">-</b></p>
                <p className="articleBody">{singleArticle.body}</p>
            </div>
        </div>
    )
}