import React, {useState} from 'react'
import db from '../firebase';
import {useStateValue} from '../StateProvider'
import firebase from 'firebase';
import {css} from '@emotion/css'


function Input({channelTitle, channelId}) {
    const [text, setText] = useState("");
    const [{user}] = useStateValue();
    const sendComment = (e) => {
        e.preventDefault();
        if (channelId) {
            db.collection('channels')
            .doc(channelId)
            .collection('comments').add({
            comment: text,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName,
            image: user?.photoURL
            })
        }
        setText('')
    }

    // const inputChange = (e) =>{
    //     setText(e.target.value)
    //     console.log(setText)
    // }
    return (
        <div 
        className={css ` `}
        >
            <form>
                <input className={css `
                width: 77vw;
                margin: 4px;
                height: 2rem;
                border: 2px solid black;
                position: relative;
                bottom: 0;`}  wrap="soft" value={text} onChange={(e)=>setText(e.target.value)}placeholder={`Message #${channelTitle?.toLowerCase()}`}/>
                <button className={css`
                display: none !important;`}type="submit" onClick={sendComment}>send</button>
            </form>
        </div>
    )
}

export default Input
