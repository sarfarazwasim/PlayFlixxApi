import React from "react";
import Login from "./SignIn";
import Reg from "./Register";
import About from "../../Components/UserSection/UserProfileAbout/ProfileAbout";
//import Dashboard from "./Dashboard";
import HomePage from "../Common/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Common/Sidebar/SidebarComponents/SidebarComponent";
function App() {
  return (
    <Router>
      <br />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Reg} />
        <Route path="/aboutme" component={About} />
        {/* <Route path="/Dashboard" component={Dashboard} /> */}
        <Route path="/HomePage" component={HomePage} />
        <Route path="/sidebar" component={Sidebar} />  
      </Switch>
    </Router>
  );
}

export default App;
