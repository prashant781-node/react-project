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
      <div class="suggestions full-width bt-1">
        <div class="sd-title">
          <h3>About Me</h3>
        </div>
        <ul class="social_links about-friend">
          <li>
            <i class="fa fa-user"></i> {gender}
          </li>
          <li>
            <i class="fa fa-calendar"></i> {dateOfBirth}
          </li>
          <li>
            <i class="fa fa-envelope"></i> {email_Id}
          </li>
          <li>
            <i class="fa fa-mobile"></i> {phone_No}
          </li>
          <li>
            <i class="fa fa-building"></i> {location}
          </li>
          <li>
            <i class="fa fa-home"></i> {`${address} ${location}`}
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutMe;
