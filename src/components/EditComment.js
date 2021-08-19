import React from 'react';
import {useParams} from 'react-router-dom';
import db from '../firebase';

function EditComment() {
    const [channelId] = useParams();
    const edit = () =>{
        if(channelId)
    db.collection("users")
    .doc(doc.id).update({foo: "bar"}); 
    }
    if(channelId)
    db.collection("users")
    .doc(doc.id).update({foo: "bar"});
    return (
        <div>
            <button>Edit</button>
            <input>code to edit</input>
        </div>
    )
}

export default EditComment
