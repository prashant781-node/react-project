import React, { Component } from "react";
class FriendsWsSec extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-9 col-md-12">
        <div className="card">
          <div className="sd-title">
            <h3>
              All Friends{" "}
              <span className="pull-right">{this.props.friends.length}</span>
            </h3>
          </div>
          <div className="search-sec">
            <div className="container">
              <div className="search-box">
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search keywords"
                  />
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
          <div className="companies-list friends-listdesign">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="company_profile_info">
                  <div className="company-up-info my-friends">
                    <img
                      src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon1.png"
                      alt=""
                    />
                    <h3>Mo Danish</h3>
                    <h4>
                      <i className="fa fa-map-marker"></i> Noida India
                    </h4>
                    <ul>
                      <li>
                        <a href="#" title="" className="follow">
                          <i className="fa fa-check"></i> Friends
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/frient-detail"
                    title=""
                    className="view-more-pro"
                  >
                    View Profile
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="company_profile_info">
                  <div className="company-up-info my-friends">
                    <img
                      src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon2.png"
                      alt=""
                    />
                    <h3>Afra Khan</h3>
                    <h4>
                      <i className="fa fa-map-marker"></i> Mumbai India
                    </h4>
                    <ul>
                      <li>
                        <a href="#" title="" className="follow">
                          <i className="fa fa-check"></i> Friends
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/frient-detail"
                    title=""
                    className="view-more-pro"
                  >
                    View Profile
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="company_profile_info">
                  <div className="company-up-info my-friends">
                    <img
                      src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon3.png"
                      alt=""
                    />
                    <h3>Jiya Al Habib</h3>
                    <h4>
                      <i className="fa fa-map-marker"></i> Delhi India
                    </h4>
                    <ul>
                      <li>
                        <a href="#" title="" className="follow">
                          <i className="fa fa-check"></i> Friends
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/frient-detail"
                    title=""
                    className="view-more-pro"
                  >
                    View Profile
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="company_profile_info">
                  <div className="company-up-info my-friends">
                    <img
                      src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon4.png"
                      alt=""
                    />
                    <h3>Imran Khan</h3>
                    <h4>
                      <i className="fa fa-map-marker"></i> Saudi Arabia UAE
                    </h4>
                    <ul>
                      <li>
                        <a href="#" title="" className="follow">
                          <i className="fa fa-check"></i> Friends
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/frient-detail"
                    title=""
                    className="view-more-pro"
                  >
                    View Profile
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="company_profile_info">
                  <div className="company-up-info my-friends">
                    <img
                      src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon5.png"
                      alt=""
                    />
                    <h3>Neha Khan</h3>
                    <h4>
                      <i className="fa fa-map-marker"></i> Noida India
                    </h4>
                    <ul>
                      <li>
                        <a href="#" title="" className="follow">
                          <i className="fa fa-check"></i> Friends
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/frient-detail"
                    title=""
                    className="view-more-pro"
                  >
                    View Profile
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="company_profile_info">
                  <div className="company-up-info my-friends">
                    <img
                      src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon6.png"
                      alt=""
                    />
                    <h3>Arif Khan</h3>
                    <h4>
                      <i className="fa fa-map-marker"></i> Mumbai India
                    </h4>
                    <ul>
                      <li>
                        <a href="#" title="" className="follow">
                          <i className="fa fa-frown-o"></i> Death
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/frient-detail"
                    title=""
                    className="view-more-pro"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsWsSec;
