import React from 'react';
import routes from './routes'
import Login from './components/Login';
import {useStateValue} from './StateProvider';
import {css} from '@emotion/css'
import {Global} from '@emotion/react';


function App() {
const [{user}, dispatch] = useStateValue();
  return (
    <div >
     <Global
      styles={{
        body: {
          margin: 0,
          padding: 0,
          height: 100

        }
      }}
    />
      {!user ? (
        <Login />
      ) : <> 
     
    {routes}
      
    </>
}
     </div>
   
  );
}

export default App;
 