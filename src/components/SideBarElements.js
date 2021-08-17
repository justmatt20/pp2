import React from 'react'
import {Link} from 'react-router-dom';

function SideBarElements({title}) {
    
        return (
        <div className="sidebarelements">
       <Link to="/channel/:channelId"> <h3><span className="hashtag">#</span>{title}</h3></Link>
        </div>
    )
}

export default SideBarElements
