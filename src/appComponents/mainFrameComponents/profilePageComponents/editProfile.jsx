import React, { Component } from "react";
class EditProfile extends Component {
  state = {};
  render() {
    return (
      <div className="user-profile frient-detailss">
        <div className="user-pro-img">
          <img src={this.props.user.profileImgUrl} alt="" />
          <div className="add-dp" id="OpenImgUpload">
            <input type="file" id="file" />
            <label for="file">
              <i className="fa fa-camera"></i>
            </label>
          </div>
        </div>
        <div className="user-specs pt-0">
          <h3>{`${this.props.user.userFirstName} ${this.props.user.userLastName}`}</h3>
          <h4>
            <i className="fa fa-map-marker"></i> {this.props.user.location}
          </h4>
        </div>
        <div className="user_pro_status">
          <ul className="flw-hr">
            <li>
              <a
                href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/edit-profile"
                title=""
                className="hre"
              >
                <i className="la la-edit"></i> Edit Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EditProfile;
