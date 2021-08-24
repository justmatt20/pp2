import React from 'react';
import {css} from '@emotion/css';



function Emails({email, timestamp}) {
    return (
        <div className={css ``}>
            <span className={css ``}>{new Date(timestamp && timestamp.toDate()).toUTCString()}</span>
            <div className={css` `}>
                    <p>{email}</p>
            </div>

        </div>
    )
}

export default Emails;
