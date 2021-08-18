import React, {useState, useEffect} from 'react'
import SideBarElements from './SideBarElements'
import db from '../firebase'
import Header from './Header';
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

    const addChannel = () => {
        const channelName = prompt('Enter a channel name');
        if(channelName){
            db.collection('channels').add({
                title :channelName,
            })
        }
    }
 
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Header />
            </div>
            <div className="sidebar-top">
                <div className="info">
                    <h2>Code Collab Club</h2>
                <div className="green-circle"></div>
                <h3>{user?.displayName}</h3>
                </div>
                
                </div>
                <div className="channels">
                <hr></hr>
                <h3 className="add-channel" onClick={addChannel}>Add Channel</h3>
                {channels.map(channel => (
                    <SideBarElements title={channel.title} id={channel.id} />
                ))}
                </div>
            
        </div>
    )
}

export default SideBar
