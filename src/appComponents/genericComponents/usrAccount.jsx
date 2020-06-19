import React, { Component } from "react";
import AccountSettings from "../mainFrameComponents/usrProfileComponents/accountSettings";
class UsrAccount extends Component {
  state = {};
  render() {
    return (
      <div className="user-account">
        <div className="user-info">
          <img src={this.props.user.accountSettingsImage} alt="" />
          <a href="#" title="">
            {this.props.user.userFirstName}
          </a>

          <i className="la la-sort-down"></i>
        </div>
        <AccountSettings onClickNominee={this.props.onClickNominee} />
      </div>
    );
  }
}

export default UsrAccount;
