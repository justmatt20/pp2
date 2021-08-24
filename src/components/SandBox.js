import React from 'react';
import {css} from '@emotion/css';

function SandBox() {


  return (
    <div className={css`
 
     `}>
      <iframe src="https://codesandbox.io/embed/sad-darkness-cp5ls?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark" style={{width: '80%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden'}} title="sad-darkness-cp5ls" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />
      
    </div>
  )
}

export default SandBox;


