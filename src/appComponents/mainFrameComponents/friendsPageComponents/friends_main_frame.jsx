import React, { Component } from "react";
import FriendsLeftBar from "./friends_left_bar";
import FriendsWsSec from "./friends_ws_sec";
class FriendsMainFrame extends Component {
  state = {
    display: "Total Friends",
  };
  friendsToDisplay() {
    if (this.state.display === "Alive Friends") {
      const aliveFriends = this.props.friends.filter(
        (friend) => friend.alive === true
      );
      return aliveFriends;
    }
    if (this.state.display === "Dead Friends") {
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
                display={this.state.display}
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
