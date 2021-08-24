import React from 'react';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './login.css'
import Typewriter from 'typewriter-effect';

function Login() {
const [state, dispatch] = useStateValue();
    const logIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            }
        )})
        .catch(error => {
            alert(error.message)
        })
    }
    return (
<div className="home">
    <div  >
            
    <div className="name"><h1 className="company">Email Collab Club</h1></div>
<div className="typewriter"><Typewriter
onInit={(typewriter) => {
    typewriter.typeString("Writing Personalized Cold Messages is Hard.").start().pauseFor(1000);
    typewriter.deleteChars(5);
    typewriter.typeString("<strong>Fun!</strong>").start(); }}/></div>
    <div>
        <p className="personal">Personalized message generation powered by GPT-3.</p>
    </div>
    
    <button className="main-btn" onClick={logIn}>Join the Club!</button>
</div>

    </div>
 )}

 export default Login;







//         <div className={css`
       
        
//         `} >
//             <div className={css`
//         `}>
//                 <img src="" alt=""/>
//                 <h1>Welcome to Code Collab Club!</h1>
//                 <h3 className="about">Where makers ideate, create, and collaborate in real time.</h3>
//                 <h4>Powered by GPT3</h4>
//                 <p className={css``}>codecollab.club</p>
//                 <button onClick={logIn}>Join the club!</button>
//             </div>
//         </div>
//     )
// }


       
        

