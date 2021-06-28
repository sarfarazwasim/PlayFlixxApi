import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import UploadVideo from "../UserSection/UserUploadVideo/UploadVideo"; 
import VideoSection from "../UserSection/UserVideoSection/VideoSection";
import history from './history';
import CreatPlaylist from "../UserSection/UserCreatPlaylist/CreatPlaylist";   
import Sidebar from "../Common/Sidebar/SidebarComponents/SidebarComponent";
import Control from "../../Control"; 
import EditStatus from "../UserSection/UserEditStatus/EditStatus"; 
import login from "../Userpannel/SignIn"

import CreatChannel from "../UserSection/UserCreatChannel/CreatChannel";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/sidebar" component={Sidebar} />    
                    <Route path="/Upload" component={UploadVideo} /> 
                    <Route path="/VideoSection" component={VideoSection} /> 
                    <Route path="/CreatPlaylist" component={CreatPlaylist} />  
                    <Route path="/EditStatus" component={EditStatus} />   
                    <Route path="/CreatChannel" component={CreatChannel} /> 
                    <Route path="/Login" component={login} />
                    <Route path="/" component={Control} />   
                </Switch>
            </Router>
        )
    }
}