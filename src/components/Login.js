import React from 'react'
import { auth, provider } from '../firebase'
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider'

function Login() {
const [state, dispatch] = useStateValue();
    const logIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className="login">
            <div className="login-box">
                <img src="" alt=""/>
                <h1>Sign in to Code Collab Club!</h1>
                <p>codecollab.club</p>
                <button onClick={logIn}>Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login
