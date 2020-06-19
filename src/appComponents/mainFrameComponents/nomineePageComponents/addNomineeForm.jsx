import React, { Component } from "react";
class AddNomineeForm extends Component {
  state = {};
  render() {
    return (
      <section className="companies-info">
        <div className="container">
          <div className="acc-setting">
            <div className="sd-title">
              <h3>Add Nominee</h3>
            </div>
            <div className="profile-refer">
              <div className="refer-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus pretium nulla quis erat dapibus, varius hendrerit
                  neque suscipit. Integer in ex euismod, posuere lectus id Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  pretium nulla quis erat dapibus, varius hendrerit neque
                  suscipit. Integer in ex euismod, posuere lectus id Lorem ipsum
                  dolor sit amet, .
                </p>
              </div>
              <div className="dwathreport">
                <div className="search-sec">
                  <div className="container">
                    <div className="acc-setting">
                      <form>
                        <div className="cp-field user_profile">
                          <div className="user-pro-img">
                            <img
                              src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/add-user.png"
                              alt=""
                            />
                            <div
                              className="add-dp nomineeprofile"
                              id="OpenImgUpload"
                            >
                              <input type="file" id="file" />
                              <label for="file">
                                <i className="fa fa-camera"></i>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="cp-field">
                          <h5>Name</h5>
                          <div className="cpp-fiel">
                            <input type="text" name="name" />
                            <i className="fa fa-user"></i>
                          </div>
                        </div>
                        <div className="cp-field">
                          <h5>Date of birth</h5>
                          <div className="cpp-fiel">
                            <input type="date" name="name" />
                            <i className="fa fa-calendar"></i>
                          </div>
                        </div>
                        <div className="cp-field">
                          <h5>Mobile No</h5>
                          <div className="cpp-fiel">
                            <input type="text" name="name" />
                            <i className="fa fa-phone"></i>
                          </div>
                        </div>
                        <div className="cp-field">
                          <h5>Email Id</h5>
                          <div className="cpp-fiel">
                            <input type="text" name="name" />
                            <i className="fa fa-envelope"></i>
                          </div>
                        </div>
                        <div className="cp-field">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck1"
                            >
                              I have read nominee{" "}
                              <a href="#">term & condition</a>
                            </label>
                          </div>
                        </div>
                        <div className="save-stngs pd3">
                          <ul>
                            <li>
                              <button type="submit">Add Nominee</button>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AddNomineeForm;
