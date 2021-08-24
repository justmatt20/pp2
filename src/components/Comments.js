import React, {useState} from 'react';
import {css} from '@emotion/css';
import db from '../firebase'



function Comments({comment, user, image, timestamp}) {
    const [edited, setEdited] = useState('')

 const edit = (id) =>{
    if(user){
    db.collection("channels")
    .doc(id).update({
        comment: edited
    }); 
    }
    setEdited(edited)
    }
    return (
        <div className={css `background-color: #F4F4F6; margin: 4px; padding: 10px `}>
          <div className={css `margin: 6px; display: flex; align-items: center; `}>
            <img className={css `height: 50px; width: 50px; object-fit: conatin; border-radius: 50px; `} src={image} alt=""/>
            <span className={css `font-size: 10px; padding-left: 10px;`}>{new Date(timestamp && timestamp.toDate()).toUTCString()}</span>
            <p className={css `font-size: 14px; font-weight: bold; color: #7953f5; padding-left: 10px;`}>{user}</p>
            </div>
            
            <div className={css` margin-left: 2rem; color: #434b57;  `}>
                    
                <h4>{comment}<span onClick={edit} className={css`float:right; margin: 4px; color: #d8d8d8; `}>edit</span></h4>
            </div>

        </div>
    )
}

export default Comments
