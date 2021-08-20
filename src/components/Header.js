import React from 'react'
import {useStateValue} from '../StateProvider';
import {Link} from 'react-router-dom';
import {css} from '@emotion/css'


function Header() {
    const [{user}] = useStateValue();
    return (
        <div className={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        background-color: #434b57;
        margin: auto;
        `}>
            <div className="header-left">
                <Link to="/profile"><img src={user?.photoURL} alt={user?.displayName} className={css`
        height: 80px;
        width: 80px;
        border: none;
        border-radius: 50px;
        `}></img></Link>
            </div>
            <div className="header-center">
                <input className={css `
                width: 60vw;
                text-align: center;`}placeholder="Search Code Collab Club"/>
            </div>
            <div className="header-right"></div>
            <p className={css `
            color: white;
            text-decoration: none;
            `}>Log out</p>
        </div>
    )
}

export default Header
