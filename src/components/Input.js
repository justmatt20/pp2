import React, {useState} from 'react'
import db from '../firebase';
import {useStateValue} from '../StateProvider'
import firebase from 'firebase';


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
    }

    // const inputChange = (e) =>{
    //     setText(e.target.value)
    //     console.log(setText)
    // }
    return (
        <div className="chat-input">
            <form>
                <input value={text} onChange={(e)=>setText(e.target.value)}placeholder={`Message #${channelTitle?.toLowerCase()}`}/>
                <button type="submit" onClick={sendComment}>send</button>
            </form>
        </div>
    )
}

export default Input
