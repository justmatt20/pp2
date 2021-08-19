import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import SideBar from './SideBar';
import Code from './Code';
import db from '../firebase';
import Comments from './Comments';
// import firebase from 'firebase';
import Input from './Input';


function Chat() {
    const {channelId} = useParams();
    const [channel, setChannel] = useState(null)
    const [messages, setMessages] = useState([]);
  

    const getChannel = () => {
        // if(channelId)
        db.collection('channels')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        })
        console.log(channel)
    }

    // const getComments = () => {
       
    //     db.collection('rooms')
    //     .doc(channelId)
    //     .collection('comments')
    //     .orderBy('timestamp', 'asc')
    //     .onSnapshot((snapshot)=>{
    //         const messages = snapshot.docs.map(docs => docs.data());
    //         setMessages(messages)
    //     })
    //     console.log(messages)
    // }

//     const getComments = () => {
//         // if(channelId)
//         db.collection("channels")
//         .doc(channelId)
//         .collection('comments')
//     .onSnapshot(function(snap) {

// 	snap.forEach(function(doc) {
// 		const messages = doc.data();;
//         setMessages(messages)
//         console.log(doc.data)
// 	});
// });
// console.log(messages)
//     }
 const getComments = () => {
    db.collection('channels')
    .doc(channelId)
    .collection('comments')
    .onSnapshot(snapshot => (
        setMessages(snapshot.docs.map((doc) => ({
            id: doc.id, 
            comment: doc.data().comment,
            timestamp: doc.data().timestamp,
            image: doc.data().image

        })))
    )
    );
 }


    useEffect(()=>{
        getChannel();
        getComments();
    }, [channelId])

    // (messages.map((message)=>{message.comment}))
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
                    // messages.length > 0 &&
                    messages.map((data)=>(
                        <Comments
                            comment={data?.comment}
                            user={data?.user}
                            image={data?.image}
                            timestamp={data.timestamp}
                        />
                    ))
                }
                
            </div>
            <div>
                <Input channelTitle={channel?.title} channelId={channelId}/>
                
            </div>
            {/* <div className="comment-screen">
            <img src={image} alt=""/>
            <div className="comment-data">
                <h4>
                    {user} 
                    <span className="timestamp ">{new Date(timestamp?.toDate().toUTCString())}</span>
                </h4>
                <p>{comment}</p>
            </div> */}
            {/* <Input channelTitle={channel?.title} channelId={channelId}/> */}
        {/* </div> */}
        
        </div>
    )
}

export default Chat
