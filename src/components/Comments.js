import React from 'react';



function Comments({comment, user, image, timestamp}) {
    return (
        <div className="comment-screen">
            <img src={image} alt=""/>
            <div className="comment-data">
                <h4>
                    {user} 
                    <span className="timestamp ">{new Date(timestamp && timestamp.toDate()).toUTCString()}</span>
                </h4>
                <p>{comment}</p>
                
            </div>

        </div>
    )
}

export default Comments
