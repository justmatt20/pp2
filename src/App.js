import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import routes from './routes'

function App() {
  return (
    <div className="app">
     {/* <Header />
     <div className="app-content">
      <SideBar /> */}
    {routes}
     </div>
    // </div>
  );
}

export default App;
 