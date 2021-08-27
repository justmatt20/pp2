import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import db from '../firebase';



function EditComment({comment, user, image, timestamp, id}) {
    const [edited, setEdited] = useState('');
    // const [editField, setEditField] = useState(false)
    const {channelId} = useParams();

//  const edit = () =>{
//     db.collection('channels')
//     .doc(channelId)
//     .collection('comments')
//     .doc(id)
//         .update({
//         comment: edited
//     }); 

//     setEdited('')
//     }

    // const edits = (e) => {
    //     setEdited(e.target.value)
    // }

    return (
        <div>
            <div>
            {/* <input type="text" value={edited} onChange={edits}></input> */}
            {/* <button onClick={edit}>Save</button> */}
            </div>

        </div>
    )
}

export default EditComment
