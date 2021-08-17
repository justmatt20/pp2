import React from 'react';
import Chat from './components/Chat';
import SideBar from './components/SideBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



export default(
    <Router>
    <Switch>
         <Route path = "/channel/:channelId" exact component={Chat}/>
         <Route path = "/" exact component={SideBar}/>
         {/* <Route exact path = "/code" component={Code}/>
         <Route path = "/"   component={HomePage}/>
        
        <Route path = "/form" component={Form}/> */}
    </Switch>
    </Router>
)