import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
// import SideBar from './SideBar';
// import Code from './Code';
import db from '../firebase';
import Comments from './Comments';
import Input from './Input';
import {css} from '@emotion/css'
import EmailCode from './EmailCode';




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

 const getComments = () => {
    db.collection('channels')
    .doc(channelId)
    .collection('comments')
    .orderBy('timestamp', 'asc')
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
            
        <div className={css``}>
           <div className={css ` `}>
            <h3 className={css` color: #7953f5; margin: 10px;`}>
           <span className={css``}>#</span>
           {channel?.title}</h3>
           <Link to='/emails'><h4 className={css`  margin: 10px; text-decoration: none;`}>{channel?.title} Emails</h4></Link>
            {/* optional chaining */}
            </div>
            <div  className={css `height: auto; width: fit;
    padding: 20px;
    margin-left: 230px;
    margin-right: 20px;
    padding-bottom: 30px;
    overflow: auto;  `}>
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
        </div>
    )
}

export default Chat
