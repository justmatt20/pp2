
import React, {useState} from 'react';
import {useStateValue} from '../StateProvider';
import db from '../firebase'
import {Link} from 'react-router-dom';




function Profile(channelId) {
    const [{user}] = useStateValue();
    

    

  

    return (
        <div>
            <Link to="/"><p>Home</p></Link>
            <h1>{user?.displayName}</h1>
        
            <div>
                
            </div>
            
        </div>
    )
}

export default Profile;
