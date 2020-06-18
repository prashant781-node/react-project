import React, { Component } from "react";
class FriendsLeftBarPagination extends Component {
  state = {};
  PaginationFriendsDispaly() {
    if (this.props.pagination === "Total Friends")
      return this.props.friends.length;
    const friendsAlive = this.props.friends.filter(
      (friend) => friend.alive === true
    );
    if (this.props.pagination === "Alive Friends") {
      return friendsAlive.length;
    } else return this.props.friends.length - friendsAlive.length;
  }
  render() {
    const { pagination, display } = this.props;
    let classes = "filter-dd ";
    if (display === pagination) {
      classes = "filter-dd active";
    }
    return (
      <div className={classes}>
        <div className="filter-ttl filter--tt2">
          <a href="#" onClick={() => this.props.onClickPagination(pagination)}>
            {pagination} <span>{this.PaginationFriendsDispaly()}</span>
          </a>
        </div>
      </div>
    );
  }
}

export default FriendsLeftBarPagination;
