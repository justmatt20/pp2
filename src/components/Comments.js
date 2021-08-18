import React from 'react'

function Comments({comment, timestamp, user, image}) {
    return (
        <div className="comment-screen">
            <img src={image} alt=""/>
            <dov className="comment-data">
                <h4>
                    {user} timestamp...
                </h4>
                <p>{comment}</p>
            </dov>

        </div>
    )
}

export default Comments
