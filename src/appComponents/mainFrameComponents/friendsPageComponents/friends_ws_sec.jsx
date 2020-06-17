import React, { Component } from "react";
import FriendProfile from "./friend_profile";
class FriendsWsSec extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-9 col-md-12">
        <div className="card">
          <div className="sd-title">
            <h3>
              All Friends{" "}
              <span className="pull-right">{this.props.friends.length}</span>
            </h3>
          </div>
          <div className="search-sec">
            <div className="container">
              <div className="search-box">
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search keywords"
                  />
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
          <div className="companies-list friends-listdesign">
            <div className="row">
              {this.props.friends.map((friend) => (
                <FriendProfile friend={friend} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsWsSec;
