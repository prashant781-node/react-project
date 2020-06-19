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
            <a
              href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/scheduled-posts"
              title=""
            >
              Scheduled Posts
            </a>
          </li>
          <li>
            <a
              href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/scheduled-messege"
              title=""
            >
              Scheduled Messege
            </a>
          </li>
          <li>
            <a
              href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/death-report"
              title=""
            >
              Report Death
            </a>
          </li>
          <li>
            <a
              href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/help-and-support"
              title=""
            >
              Help & Support
            </a>
          </li>
          <li>
            <a
              href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/refer-and-earn"
              title=""
            >
              Refer and Earn
            </a>
          </li>
          <li>
            <a
              href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/user-privacy"
              title=""
            >
              Privacy
            </a>
          </li>
        </ul>
        <h3 className="tc">
          <a
            href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/"
            title=""
          >
            Logout
          </a>
        </h3>
      </div>
    );
  }
}

export default AccountSettings;
