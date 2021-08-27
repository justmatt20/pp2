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
        <div  
        // className="max-width: 160px; height: 700px; overflow: hidden; position: absolute; background-repeat: repeat-y;"
        >
            <div>
            <Header />
            </div>
            {/* <div  className={css`
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
                <hr></hr> */}
                <div className={css `width: 180px; position: absolute; `}> 
                <div className={css `font-size: 14px; color: #CCCCCC; display: flex; align-items: center; justify-content: center; flex-direction: column; line-height: 0.2rem;` }>
                    <h2>Code Collab Club</h2>
                <h3 className={css`font-size: 18px; color: #7953f5; `}>{user?.displayName}</h3>
                <span className={css `height: 0.5rem; width: 0.5rem; border-radius: 50px; background-color: green; position: absolute;`}></span>
                </div>
                
                <h3 className={css`cursor: pointer; margin-left: 2rem; `} onClick={addChannel}>Add Channel</h3>
                {channels.map(channel => (
                    <SideBarElements title={channel.title} id={channel.id} />
                ))}
                </div>
            
        </div>
    )
}

export default SideBar
