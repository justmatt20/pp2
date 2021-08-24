import React from 'react'
// import Header from './Header';
import SideBar from './SideBar';
import Code from './Code';
import SandBox from './SandBox';
import Chat from './Chat';
import {css} from '@emotion/css'
// import SideBarElements from './SideBarElements';

function ChatScreen() {
    return (
        <div className={css `height: 100vh; display: flex; overflow-x: hidden; `}>
           <div className={css ` width: 20rem; `}>
           <SideBar />
           </div>
           {/* <div className={css `display: grid; align-content: center; flex: 0.4`}>
           <Code />
       
           </div> */}
           <div className={css `width: 80rem;`}>
           <Chat />
           </div>
            
        
        </div>
    )
}

export default ChatScreen
