import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import SideBar from './SideBar';
import Code from './Code';
import db from '../firebase';
import Comments from './Comments';


function Chat() {
    const {channelId} = useParams();
    const [channelData, setChannelData] = useState(null)
    const [chatComments, setChatComments] = useState([]);

    useEffect(() => {
        if(channelId){
            db.collection("channels")
            .doc(channelId)
            .onSnapshot((snapshot) => 
                setChannelData(snapshot.data())
            );
        }

        db.collection("channels")
        .doc(channelId)
        .collection("comments")
        .orderBy("timeStamp", "asc")
        .onSnapshot( (snapshot) =>
            setChatComments(snapshot.docs.map((doc) => doc.data()))
            );
        
    }, [channelId])
    console.log(channelData);
    console.log("MESSAGES >>>", chatComments)

        return (
        <div className="chat">
            <SideBar />
            <div className="chat-header">
            <h3 className="channel-name">#{channelData?.title}</h3>
            
            </div>
               
          
            <Code />
            <div className="chat-sidebar">
                {chatComments.map(({comment, timestamp, image, user}) => (
                <Comments
                    comment={comment}
                    timestamp ={timestamp}
                    user ={user}
                    image ={image}
                    />

                ))}
            </div>
            <div>
                <input />
                
            </div>
        </div>
    )
}

export default Chat
