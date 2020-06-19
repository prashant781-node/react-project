import React, { Component } from "react";
class Nominee extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <div className="company_profile_info">
          <div className="company-up-info my-friends">
            <img src={this.props.nominee.imgUrl} alt="" />
            <h3>
              <a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/nominee-detail">
                {this.props.nominee.firstName}
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Nominee;
