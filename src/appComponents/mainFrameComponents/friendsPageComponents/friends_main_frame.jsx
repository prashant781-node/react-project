import React, { Component } from "react";
import FriendsLeftBar from "./friends_left_bar";
import FriendsWsSec from "./friends_ws_sec";
class FriendsMainFrame extends Component {
  render() {
    return (
      <section className="companies-info">
        <div className="container">
          <div className="main-section-data">
            <div className="row">
              <FriendsLeftBar friends={this.props.friends} />
              <FriendsWsSec friends={this.props.friends} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FriendsMainFrame;
