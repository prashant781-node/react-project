import React, { Component } from "react";
import Suggestions from "../usrProfileComponents/suggestions";
import EditProfile from "./editProfile";
import AboutMe from "./aboutMe";
class ProfileLeftBar extends Component {
  state = {};
  render() {
    return (
      <div className="main-left-sidebar no-margin">
        <EditProfile user={this.props.user} />
        <AboutMe user={this.props.user} />
        <Suggestions />
      </div>
    );
  }
}

export default ProfileLeftBar;
