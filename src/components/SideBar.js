import React, {useState, useEffect} from 'react'
import SideBarElements from './SideBarElements'
import db from '../firebase'
import Header from './Header';
import {css} from '@emotion/css';
import {useStateValue} from '../StateProvider';


function SideBar() {
    const [channels, setChannel] = useState([]);
    const [{user}] = useStateValue();
    
    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannel(snapshot.docs.map((doc) => ({
                id: doc.id, 
                title: doc.data().title,
            })))
        )
        );
    }, []);

    const addChannel = (e) => {
        const channelName = prompt('Enter a channel name');

        if(channelName){
            db.collection('channels').add({
                title :channelName,
            })
        }
    }
 
    return (
        <div >
            <Header />
            
            <div  className={css`
            width: 20vw;
            display: flex;
            justify-content: center;
            `}>
                <div className="info">
                    <h2>Code Collab Club</h2>
                <div className="green-circle"></div>
                <h3 className={css`font-size: 18px; color: #7953f5; `}>{user?.displayName}</h3>
                </div>
                
                </div>
                <div className="max-width: 210px; height: 700px; overflow: hidden; position: absolute; background-repeat: repeat-y;">
                <hr></hr>
                <h3 className={css`cursor: pointer; margin-left: 2rem; `} onClick={addChannel}>Add Channel</h3>
                {channels.map(channel => (
                    <SideBarElements title={channel.title} id={channel.id} />
                ))}
                </div>
            
        </div>
    )
}

export default SideBar
