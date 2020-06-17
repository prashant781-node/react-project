import React, { Component } from 'react';
import UserProfile from "./usrProfileComponents/usrProfile"
import SocialLinks from "./usrProfileComponents/socialLinks"
import Suggestions from "./usrProfileComponents/suggestions"
class MainLeftBar extends Component {
    state = {}
    render() {
        return (<div className="main-left-sidebar no-margin">
            <UserProfile user={this.props.user} />
            <SocialLinks />
            <Suggestions />
        </div>);
    }
}

export default MainLeftBar;