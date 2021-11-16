import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import db from '../firebase';
import {css} from '@emotion/css';
import Emails from './Emails';
import EmailCode from './EmailCode';




function EmailPage() {
    const {channelId} = useParams();
    const [emails, setEmails] = useState([]);
    const [channel, setChannel] = useState(null)
    


    const getChannel = () => {
        // if(channelId)
        db.collection('channels')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        })
        console.log(channel)
    }
    const getEmails = () => {
        if(channelId){
        db.collection('emails')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => (
            setEmails(snapshot.docs.map((doc) => ({
                id: doc.id, 
                email: doc.data().email,
                timestamp: doc.data().timestamp,
               
    
            })))
            
        )
        );
        console.log(emails)
    }}
    
    useEffect(()=>{
        getEmails();
    }, [channelId])
    
    return (
        
        <div  className={css ``}>
            <Link to="/"><p>Home</p></Link>
            <EmailCode />
            <div >
            {
                    emails.length > 0 &&
                    emails.map((data)=>(
                        <Emails
                            email={data?.email}
                            timestamp={data?.timestamp}
                        />
                    ))
                }
                </div>
                
            </div>
    )
}

export default EmailPage;

