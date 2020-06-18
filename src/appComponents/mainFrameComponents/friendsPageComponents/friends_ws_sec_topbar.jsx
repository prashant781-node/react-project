import React, { Component } from "react";
class FriendsWsSecTopBar extends Component {
  state = {};
  render() {
    return (
      <div className="sd-title">
        <h3>
          {this.props.display}
          <span className="pull-right">{this.props.length}</span>
        </h3>
      </div>
    );
  }
}

export default FriendsWsSecTopBar;
