import React, { Component } from "react";
class FriendProfile extends Component {
  render() {
    const { friend } = this.props;
    return (
      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <div className="company_profile_info">
          <div className="company-up-info my-friends">
            <img src={friend.imgUrl} alt="" />
            <h3>{friend.firstName}</h3>
            <h4>
              <i className="fa fa-map-marker"></i> {friend.location}
            </h4>
            <ul>
              <li>
                <a href="#" title="" className="follow">
                  <i
                    className={
                      friend.alive === true ? "fa fa-check" : "fa fa-frown-o"
                    }
                  ></i>{" "}
                  {friend.alive === true ? "Friends" : "Death"}
                </a>
              </li>
            </ul>
          </div>
          <a
            href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/frient-detail"
            title=""
            className="view-more-pro"
          >
            View Profile
          </a>
        </div>
      </div>
    );
  }
}

export default FriendProfile;
