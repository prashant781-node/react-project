import React, { Component } from "react";
class AccountSettings extends Component {
  state = {};
  render() {
    return (
      <div className="user-account-settingss" id="users">
        <ul className="us-links">
          <li>
            <a href="#" onClick={this.props.onClickMyProfile} title="">
              My Profile
            </a>
          </li>
          <li>
            <a href="#" title="" onClick={this.props.onClickNominee}>
              My Nominee
            </a>
          </li>
          <li>
            <a href="#" title="">
              Scheduled Posts
            </a>
          </li>
          <li>
            <a href="#" title="">
              Scheduled Messege
            </a>
          </li>
          <li>
            <a href="#" title="">
              Report Death
            </a>
          </li>
          <li>
            <a href="#" title="">
              Help & Support
            </a>
          </li>
          <li>
            <a href="#" title="">
              Refer and Earn
            </a>
          </li>
          <li>
            <a href="#" title="">
              Privacy
            </a>
          </li>
        </ul>
        <h3 className="tc">
          <a href="#" title="">
            Logout
          </a>
        </h3>
      </div>
    );
  }
}

export default AccountSettings;
