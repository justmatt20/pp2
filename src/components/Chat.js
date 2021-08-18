import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import SideBar from './SideBar';
import Code from './Code';
import db from '../firebase';
import Comments from './Comments';
import firebase from 'firebase';
import Input from './Input';


function Chat() {
    const {channelId} = useParams();
    const [channel, setChannel] = useState(null)
    const [messages, setMessages] = useState([]);

    const getChannel = () => {
        if(channelId)
        db.collection('channels')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        })
    }

    // const getComments = () => {
    //     db.collection('channels')
    //     // .doc(channelId)
    //     .where('title', '==', channelId)
    //     .collection('comments')
    //     .orderBy('timestamp', 'asc')
    //     .onSnapshot((snapshot)=>{
    //         const messages = snapshot.docs.map((doc)=>doc.data());
    //         setMessages(messages);
    //     })
    // }

    const getComments = () => {
        if(channelId)
        db.collection("channels")
        .doc(channelId)
        .collection('comments')
    .onSnapshot(function(snap) {

	snap.forEach(function(doc) {
		const messages = (doc.data());
        setMessages(messages)
	});
});
console.log(messages)
    }
 

    useEffect(()=>{
        getChannel();
        getComments();
    }, [channelId])

        return (
        <div className="chat">
            <SideBar />
            <div className="chat-header">
            <h3 className="channel-name">#{channel?.title}</h3>
            {/* optional chaining */}
            
            </div>
               
          
            <Code />
            <div className="chat-sidebar">
            {
                    messages.length > 0 &&
                    messages.map((data)=>(
                        <Comments
                            comment={data.comment}
                            user={data.user}
                            image={data.image}
                            timestamp={data.timestamp}
                        />
                    ))
                }
                
            </div>
            <div>
                <Input channelName={channel?.name} channelId={channelId}/>
                
            </div>
        </div>
    )
}

export default Chat
