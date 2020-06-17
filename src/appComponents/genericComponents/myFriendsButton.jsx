import React, { Component } from "react";
class MyFriends extends Component {
  state = {};
  render() {
    return (
      <li>
        <a href="#" title="" onClick={this.props.onClick}>
          <span>
            <img
              src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/icon4.png"
              alt=""
            />
          </span>
          My Friends
        </a>
      </li>
    );
  }
}

export default MyFriends;
