import React, { Component } from "react";
class UsrFwStatus extends Component {
  state = {};
  render() {
    return (
      <ul className="user-fw-status">
        <li>
          <h4>
            Friends{" "}
            <span className="puli-right">{this.props.user.friends.length}</span>
          </h4>
        </li>
        <li>
          <h4>
            Nominee{" "}
            <span className="puli-right">{this.props.user.nominee.length}</span>
          </h4>
        </li>
        <li>
          <a href="/src/index.js" title="">
            View Profile
          </a>
        </li>
      </ul>
    );
  }
}

export default UsrFwStatus;
