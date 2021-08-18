import React, {useState, useEffect} from 'react'
import SideBarElements from './SideBarElements'
import db from '../firebase'


function SideBar() {
    const [channels, setChannel] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannel(snapshot.docs.map((doc) => ({
                id: doc.id, 
                title: doc.data().title,

            })))
        )
        );
    }, []);

 
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div className="info">
                    <h2>Code Collab Club</h2>
                <div className="green-circle"></div>
                <h3>Name</h3>
                </div>
                
                </div>
                <div className="channels">
                <hr></hr>
                <h3 className="add-channel">Add Channel</h3>
                {channels.map(channel => (
                    <SideBarElements title={channel.title} id={channel.id} />
                ))}
                </div>
            
        </div>
    )
}

export default SideBar
