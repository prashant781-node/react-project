import React, { Component } from "react";
import Messages from "./messages";
import Notification from "./notification";
import Home from "./homeButton";
import MyFriends from "./myFriendsButton";
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          <Home onClick={this.props.onHomeClick} />
          <MyFriends onClick={this.props.onFriendsClick} />
          <Messages />
          <Notification />
        </ul>
      </nav>
    );
  }
}

export default Nav;
