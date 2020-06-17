import React, { Component } from "react";
class FriendsLeftBar extends Component {
  state = {};
  aliveFriends() {
    const friendsAlive = this.props.friends.filter(
      (friend) => friend.status === "alive"
    );
    return friendsAlive.length;
  }
  render() {
    return (
      <div className="col-lg-3 col-md-12">
        <div className="filter-secs">
          <div className="filter-heading">
            <h3>Manage My Neywork</h3>
          </div>
          <div className="filter-dd active">
            <div className="filter-ttl filter--tt2">
              <a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/my-friend">
                Total Friends <span>{this.props.friends.length}</span>
              </a>
            </div>
          </div>
          <div className="filter-dd">
            <div className="filter-ttl filter--tt2">
              <a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/live-friend">
                Live Friends <span>{this.aliveFriends()}</span>
              </a>
            </div>
          </div>
          <div className="filter-dd">
            <div className="filter-ttl filter--tt2">
              <a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/death-friend">
                Death Friends{" "}
                <span>{this.props.friends.length - this.aliveFriends()}</span>
              </a>
            </div>
          </div>
          <div className="filter-dd">
            <div className="filter-ttl filter--tt2">
              <a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/pending-friend-request">
                Pending Request <span>8</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsLeftBar;