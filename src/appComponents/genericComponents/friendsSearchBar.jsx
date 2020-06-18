import React, { Component } from "react";
class FriendsSearhBar extends Component {
  state = {};
  render() {
    return (
      <div className="search-sec">
        <div className="container">
          <div className="search-box">
            <form>
              <input type="text" name="search" placeholder="Search keywords" />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsSearhBar;
