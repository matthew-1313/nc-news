import { voteOnArticle } from "../../api"
import { useState } from "react"

export const VoteSection = ({article_id, setSingleArticle, singleArticle}) => {
    const [votedComment, setVotedComment] = useState('')
    const [canVote, setCanVote] = useState(true)


function upVoting(){
    const upVote = { inc_votes: 1 }
    finalVoter(upVote)
}

function downVoting(){
    const downVote = { inc_votes: -1 }
    finalVoter(downVote)
}

function finalVoter(eitherVote){
    setVotedComment('Thank you for voting, this decision was final and cannot be altered. You must live with the weight of this choice forever... unless, of course, you refresh the page...')
    if (canVote){
        voteOnArticle(article_id, eitherVote).then((updatedArticle) => {
            setSingleArticle(updatedArticle)
            setCanVote(false)
        }).catch((err) => {
            if (err) {
                setVotedComment('Something seems to have gone wrong with your vote. This is clearly your own fault and has nothing to do with this website whatsoever...')
            }
        })}
}

    return (
    <div>
        <h2>Votes: <span id="voteButton" className="upVote" onClick={upVoting}>+</span> <b>{singleArticle.votes}</b> <span id="voteButton" className="downVote" onClick={downVoting}>-</span></h2>
        <p>{votedComment}</p>
    </div>
    )
}
