import React from 'react';
import {useStateValue} from '../StateProvider';
import {Link} from 'react-router-dom';


function Profile() {
    const [{user}] = useStateValue();
    return (
        <div>
            <Link to="/"><p>Home</p></Link>
            <h1>{user?.displayName}</h1>
            <button>Change your profile image</button>
            <div>
                <h3>Your Saved Code:</h3>
            </div>
        </div>
    )
}

export default Profile
