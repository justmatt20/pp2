import React from 'react'
import {useStateValue} from '../StateProvider';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';
import {css} from '@emotion/css'
import Login from './Login';


function Header() {
    const [{user}] = useStateValue();
    const history = useHistory();
    // const logout = async (e) => {
    //     e.preventDefault();
  
    //     await auth().signOut().then(function() {
    //       console.log("Successfully signed out.")
  
    //     }).catch(function(error) {
    //       console.log(error)
    //       console.log("An error occurred")
    //     });
  
    //     console.log(user)
    //     // history.push(<Login />);
    //   }

    const logout = () => {
        return auth.user && (
            <button onClick={() => auth.signOut()}>Log out</button>
        )
    }
    
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
            {/* <p className={css `
            color: white;
            text-decoration: none;
            `} onClick={logout}>Log out</p> */}
            {logout}
        </div>
    )
}

export default Header
