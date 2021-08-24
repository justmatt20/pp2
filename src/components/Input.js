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
        className={css `position: absolute; bottom: 0;`}
        >
            <form>
                <input className={css `
                width: 28vw;
                height: 2rem;
                margin-bottom: 0.4rem;
                border: 2px solid black;
                margin-top: 2rem;
                bottom 0;`}  wrap="soft" value={text} onChange={(e)=>setText(e.target.value)}placeholder={`Message #${channelTitle?.toLowerCase()}`}/>
                <button className={css`
                display: none !important;`}type="submit" onClick={sendComment}>send</button>
            </form>
        </div>
    )
}

export default Input
