import React, { Component } from "react";
import FriendsLeftBarPagination from "./friends_left_bar_pagination";
class FriendsLeftBar extends Component {
  state = {
    paginations: ["Total Friends", "Alive Friends", "Dead Friends"],
  };

  render() {
    return (
      <div className="col-lg-3 col-md-12">
        <div className="filter-secs">
          <div className="filter-heading">
            <h3>Manage My Network</h3>
          </div>
          {this.state.paginations.map((pagination) => (
            <FriendsLeftBarPagination
              key={pagination}
              onClickPagination={(pagination_rec) =>
                this.props.onClickPagination(pagination_rec)
              }
              pagination={pagination}
              friends={this.props.friends}
              display={this.props.display}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FriendsLeftBar;
