import React from 'react';
import Chat from './components/Chat';
import SideBar from './components/SideBar';
import ChatScreen from './components/ChatScreen'
import Logout from './components/Logout';
import Profile from './components/Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';



export default(
    <Router>
    <Switch>
         <Route path = "/channel/:channelId" exact component={ChatScreen}/>
         <Route path = "/" exact component={SideBar}/>
         <Route path = "/logout" exact component={Logout}/>
         <Route path = "/profile"  exact component={Profile}/>
         <Route path = "/login" exact component={Login}/>

        
        {/* <Route path = "/form" component={Form}/> */}
    </Switch>
    </Router>
)