import React from 'react';
import Chat from './components/Chat';
import SideBar from './components/SideBar';
import Login from './components/Login';
import Profile from './components/Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



export default(
    <Router>
    <Switch>
         <Route path = "/channel/:channelId" exact component={Chat}/>
         <Route path = "/" exact component={SideBar}/>
         <Route path = "/login" exact component={Login}/>
         <Route path = "/profile"  exact component={Profile}/>
        
        {/* <Route path = "/form" component={Form}/> */}
    </Switch>
    </Router>
)