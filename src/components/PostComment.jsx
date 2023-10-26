import { useState, useEffect } from "react"
import { postComment } from "../../api"

export const PostComment = ({article_id, setComments}) => {
    const [commentState, setCommentState] = useState({
        username: "grumpy19",
        body: '',
    })
    const [textboxState, setTextboxState] = useState()
    const [responseState, setResponseState] = useState('')

    function handleForm(event) {
        event.preventDefault()
        if (!commentState.body) {
            setResponseState('please enter a comment')
        } else if (commentState.body.length > 0){
            postComment(article_id, commentState).then((comment) => {
                setResponseState('posting...')
                setComments((currentComments) => {
                    return [...currentComments, comment]
                })
                setTextboxState('')
                setResponseState('')
            }).catch((err) => {
                if (err){
                    setResponseState('there was an issue posting your comment, please try again')
                }
            })
        }
    }

    function commentUpdater(){
        setCommentState(() => {
            return {
                username: "grumpy19",
                body: textboxState,
            }
        })
    }


    return (
        <div>
            <form onSubmit={handleForm}>
            <h3 id="commentArea" >Comment below:</h3>
            <div id="commentArea" className="gap" />
            <button onClick={commentUpdater} id="commentArea">Post!</button>
            <br></br>
            <textarea name= "textboxState" className="textbox" placeholder="your comment here..." value={textboxState} onChange={(event)=> {
                const value = event.target.value
                setTextboxState(value)
            }}/>
            <p>{responseState}</p>
            </form>
        </div>
    )
}