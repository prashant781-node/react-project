import React, { Component } from "react";
import FriendsLeftBar from "./friends_left_bar";
import FriendsWsSec from "./friends_ws_sec";
class FriendsMainFrame extends Component {
  state = {
    display: "total",
  };
  friendsToDisplay() {
    if (this.state.display === "alive") {
      const aliveFriends = this.props.friends.filter(
        (friend) => friend.alive === true
      );
      return aliveFriends;
    }
    if (this.state.display === "dead") {
      const deadFriends = this.props.friends.filter(
        (friend) => friend.alive === false
      );
      return deadFriends;
    }

    return this.props.friends;
  }
  changeDisplay(friendsDisplay) {
    this.setState({ display: friendsDisplay });
  }
  render() {
    return (
      <section className="companies-info">
        <div className="container">
          <div className="main-section-data">
            <div className="row">
              <FriendsLeftBar
                onClickPagination={(display) => this.changeDisplay(display)}
                friends={this.props.friends}
              />
              <FriendsWsSec
                display={this.state.display}
                friends={this.friendsToDisplay()}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FriendsMainFrame;
