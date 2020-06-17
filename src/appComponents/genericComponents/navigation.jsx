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
          <Home />
          <MyFriends />
          <Messages />
          <Notification />
        </ul>
      </nav>
    );
  }
}

export default Nav;
