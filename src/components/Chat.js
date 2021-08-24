import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
// import SideBar from './SideBar';
import Code from './Code';
import db from '../firebase';
import Comments from './Comments';
import Input from './Input';
import SandBox from './SandBox';
import {css} from '@emotion/css'




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

    // const sendComment = (text) => {
    //     if(channelId){
    //         const payload = {
    //             text: text,
    //             timestamp: firebase.firestore.Timestamp.now(),
    //             user: user.displayName,
    //             image: user.photoURL
    //         }
    //         db.collection("channels").doc(channelId).collection('comments').add(payload);
    //     }
    // }
 const getComments = () => {
    db.collection('channels')
    .doc(channelId)
    .collection('comments')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => (
        setMessages(snapshot.docs.map((doc) => ({
            id: doc.id, 
            comment: doc.data().comment,
            timestamp: doc.data().timestamp,
            image: doc.data().image,
            user: doc.data().user

        })))
    )
    );
 }


    useEffect(()=>{
        getChannel();
        getComments();
    }, [channelId])

        return (
            
        <div className={css`
        margin: 0;
        height: 87vh;
        position: relative;
        
       
       `}>
           <div 
        //    className={css `width: 70%; display: flex; justify-content: center; align-content: center;`}
        className={css `position: absolute; height: 80%; width: 65%; bottom: 0; margin: 0; `}
           >
           <Code />
           </div>
           
          <div className={css`height: 70vh; width: 30vw; position: absolute; right: 0; bottom: 0; `}
        //   className={css` height: 100%; width: 36%; position: relative;  float: right;  background-color: #8766F5; padding-left: 4px; `}
          >
      <div 
     
      >
            <div 
            className={css`display: flex; flex-direction: column; margin-bottom: 1rem;`}
            >
            <h3 className={css`
       color: #ffffff;`}>
           <span className={css`
       color: #434b57`}>#</span>
           {channel?.title}</h3>
            {/* optional chaining */}
            
            
         
            </div>
            <div  className={css `position: absolute; bottom: 0;
        `}
            
            >
            {
                    messages.length > 0 &&
                    messages.map((data)=>(
                        <Comments
                            comment={data?.comment}
                            user={data?.user}
                            image={data?.image}
                            timestamp={data.timestamp}
                        />
                    ))
                }
                
          
                <Input  channelTitle={channel?.title} channelId={channelId}/>
                
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
        </div>
        </div>
    )
}

export default Chat
