import React from 'react';
import {Link} from 'react-router-dom';

function Logout() {
    return (
        <div>
            <h1>You have successfully logged out.</h1>
            <Link to={'/'}><button>Come Back!</button></Link>
        </div>
    )
}

export default Logout
