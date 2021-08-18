import React from 'react';
import {Link} from 'react-router-dom';


function Home() {

    return (
        <div>
            <h1>Welcome to Code Collab Club</h1>
            <h3>Where teams ideate, build, and design in real time</h3>
            <div>
             
                   
                <Link to="/login"><button>Join the Club!</button></Link> 
               
         

            </div>
        </div>
    )
}

export default Home
