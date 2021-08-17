import React from 'react'
import {useParams} from 'react-router-dom'
import SideBar from './SideBar';


function Chat() {
    const {channelId}= useParams();
        return (
        <div className="chat">
            <SideBar />
            <h1>Chat {channelId}</h1>
        </div>
    )
}

export default Chat
