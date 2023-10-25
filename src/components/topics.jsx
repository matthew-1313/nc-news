import { useState, useEffect } from "react"
import { getTopics } from "../../api"
import { Link } from "react-router-dom"

export const Topics = () => {
    const [allTopics,setAllTopics] = useState()

    useEffect(() => {
        getTopics().then((topics) => {
            setAllTopics(topics)
        })
    }, [allTopics])

    if (!allTopics){
        return (
            <h2>Loading Topics...</h2>
        )
    }else{
        return (
            <div>
                <p>topics</p>
                <dl className="dl">
                    {allTopics.map((topic) => {
                        return (
                            <div key={`article_${topic.slug}`}>
                            <Link to={`/topics/${topic.slug}`} id="topicCard">
                            <dt className="dt">{topic.slug}</dt>
                            <dd className="dd">{topic.description}</dd>
                            </Link>
                            </div>
                        )
                    })}
                </dl>
            </div>
        )
    }
}