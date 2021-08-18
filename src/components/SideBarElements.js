import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import db from '../firebase';

function SideBarElements({title, id, addChannelElement}) {
    const history = useHistory();
    const selectChannel = () => {
            if(id){
                history.push(`/channel/${id}`)
            }else{
                history.push(title)
            }
    }

    const addChannel = () => {
        const channelName = prompt('Enter a channel name');
        if(channelName){
            db.collection('channels').add({
                title :channelName,
            })
        }
    }
        return (
        <div className="sidebarelements" onClick={addChannelElement ? addChannel : selectChannel}>
       {/* <Link to="/channel/:channelId"> <h3><span className="hashtag">#</span>{title}</h3></Link> */}
       
       <h3><span className="hashtag">#</span>{title}</h3>
        </div>
    )
}

export default SideBarElements
