import React from "react";
import "../../../assets/Css/CommonCss/Sidebar/Sidebar.css";
import SidebarComponent from "./SidebarComponents/SidebarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SubscriberPage from "../../Pages/SubscriberPage";
//import HomePage from "../HomePage/HomePage";
import PremiumPage from "../../Pages/PremiumPage";
import ChannelPage from "../../Pages/ChannelPage";
import UserAccounts from "../../Pages/UserAccounts"; 
import HomePage from "../HomePage/HomePage";
import login from "../LoginSignUp/SignIn";
function Sidebar() {
  //const [show, showState] = useState("play");
  return (
    <div className="Sidebar">
      <Router>
        <SidebarComponent />
        <Switch>   
          <Route path="/subscriber" component={SubscriberPage} />
          <Route path="/premium" component={PremiumPage} />
          <Route path="/liveStremming" component={PremiumPage} />
          <Route path="/channel" component={ChannelPage} />
          <Route path="/Music" component={PremiumPage} />
          <Route path="/sports" component={PremiumPage} />
          <Route path="/trending" component={PremiumPage} />
          <Route path="/library" component={PremiumPage} />
          <Route path="/UserAccounts" component={UserAccounts} />
          <Route path="/login" component={login} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default Sidebar;
