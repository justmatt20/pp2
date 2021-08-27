import React from 'react'
// import Header from './Header';
import SideBar from './SideBar';
import Code from './Code';

import Chat from './Chat';
import {css} from '@emotion/css'
// import SideBarElements from './SideBarElements';

function ChatScreen() {
    return (
        <div className={css ` `}>
           <div 
           className={css `  `}
           >
           <SideBar />
           </div>
           {/* <div className={css `display: grid; align-content: center; flex: 0.4`}>
           <Code />
       
           </div> */}
           <div className={css `height: 70vh; overflow-y: auto;`}>
           <Chat />
           </div>
            
        
        </div>
    )
}

export default ChatScreen
