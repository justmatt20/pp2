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
                <h1>Welcome to Code Collab Club!</h1>
                <h3 className="about">Where makers ideate, create, and collaborate in real time.</h3>
                <h4>Powered by GPT3</h4>
                <p>codecollab.club</p>
                <button onClick={logIn}>Join the club!</button>
            </div>
        </div>
    )
}

export default Login
