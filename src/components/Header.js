import React from 'react'
import {useStateValue} from '../StateProvider';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';
import {css} from '@emotion/css'
import {useParams} from 'react-router-dom';


function Header() {
    const [{user}] = useStateValue();
    const history = useHistory();
    const {userId} = useParams();
    const logout = async (e) => {
        e.preventDefault();
  
        await auth.signOut().then(function() {
          console.log("Successfully signed out.")
  
        }).catch(function(e) {
          console.log(e)
          console.log("An error occurred")
        });
  
        console.log(user)
        history.push(`/logout`);
      }

    
    return (
        <div className={css`
        display: flex;
        width: 100 !important;
        height: 160px;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        background-color: #7953f5;
        margin: auto;
        overflow: hidden;
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
            `} onClick={logout}>Log out</p>
            {logout}
            <div>
            <div  className={css`
            width: 20vw;
            display: flex;
            justify-content: center;
            `}>
           
                
                </div>
               
            </div>
            
        </div>
    )
}

export default Header;
