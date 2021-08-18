import React from 'react'
import {useStateValue} from '../StateProvider';
import {Link} from 'react-router-dom';

function Header() {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/profile"><img src={user?.photoURL} alt={user?.displayName}></img></Link>
            </div>
            <div className="header-center">
                <input placeholder="Search Code Collab Club"/>
            </div>
            <div className="header-right"></div>
            <p>Log out</p>
        </div>
    )
}

export default Header
