import React from 'react';
import routes from './routes'
import Home from './components/Home';
import Login from './components/Login';
import {useStateValue} from './StateProvider';

function App() {
const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
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
 