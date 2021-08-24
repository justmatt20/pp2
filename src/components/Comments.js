import React from 'react';
import {css} from '@emotion/css';



function Comments({comment, user, image, timestamp}) {
    return (
        <div className={css `display: flex; flex-direction: column; margin-bottom: 1rem;
        `}>
            <div className={css `height: 3rem; width: 3rem; `}>
            <img className={css `height: 3rem; width: 3rem; border-radius: 50px;`} src={image} alt=""/></div>
            <span className={css `font-size: 0.8rem; width: 18rem;`}>{new Date(timestamp && timestamp.toDate()).toUTCString()}</span>
            <div className={css` display: flex;`}>
                <div className={css`margin: 0;`}>
                    <p>{user}</p>
                
                <h4>
                    {comment}
                </h4>
                
                </div>
               
                
            </div>

        </div>
    )
}

export default Comments
