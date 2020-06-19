import React, { Component } from "react";
class AboutMe extends Component {
  state = {};
  render() {
    const {
      gender,
      dateOfBirth,
      email_Id,
      phone_No,
      location,
      address,
    } = this.props.user;
    return (
      <div className="suggestions full-width bt-1">
        <div className="sd-title">
          <h3>About Me</h3>
        </div>
        <ul className="social_links about-friend">
          <li>
            <i className="fa fa-user"></i> {gender}
          </li>
          <li>
            <i className="fa fa-calendar"></i> {dateOfBirth}
          </li>
          <li>
            <i className="fa fa-envelope"></i> {email_Id}
          </li>
          <li>
            <i className="fa fa-mobile"></i> {phone_No}
          </li>
          <li>
            <i className="fa fa-building"></i> {location}
          </li>
          <li>
            <i className="fa fa-home"></i> {`${address} ${location}`}
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutMe;
