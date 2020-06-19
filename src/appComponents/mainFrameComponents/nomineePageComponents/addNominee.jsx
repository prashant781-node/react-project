import React, { Component } from "react";
class AddNominee extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <div className="company_profile_info">
          <div className="company-up-info my-friends">
            <img
              src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/add-user.png"
              alt=""
            />
            <h3>
              <a href="#" onClick={this.props.onClickAddNominee}>
                Add Nominee
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNominee;
