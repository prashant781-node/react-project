import React, { Component } from "react";
import UsrImage from "./usr_image";
import UsrSpecs from "./usrSpecs";
import UsrFwStatus from "./usr_fw_status";
class UserProfile extends Component {
  render() {
    return (
      <div className="user-data full-width">
        <div className="user-profile">
          <UsrImage user={this.props.user} />
          <UsrSpecs user={this.props.user} />
        </div>
        <UsrFwStatus user={this.props.user} />
      </div>
    );
  }
}

export default UserProfile;
