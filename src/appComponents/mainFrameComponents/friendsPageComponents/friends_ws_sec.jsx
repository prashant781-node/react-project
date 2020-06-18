import React, { Component } from "react";
import FriendProfile from "./friend_profile";
import FriendsWsSecTopBar from "./friends_ws_sec_topbar";
import FriendsSearhBar from "../../genericComponents/friendsSearchBar";

class FriendsWsSec extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-9 col-md-12">
        <div className="card">
          <FriendsWsSecTopBar
            length={this.props.friends.length}
            display={`${this.props.display}`}
          />
          <FriendsSearhBar />
          <div className="companies-list friends-listdesign">
            <div className="row">
              {this.props.friends.map((friend) => (
                <FriendProfile key={friend._id} friend={friend} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsWsSec;
