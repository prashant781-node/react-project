import React, { Component } from "react";
class Messages extends Component {
  state = {};
  render() {
    return (
      <li>
        <a href="" title="" className="not-box-openm">
          <span>
            <img
              src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/icon6.png"
              alt=""
            />
          </span>
          Messages
        </a>
        <div className="notification-box msg" id="message">
          <div className="nt-title">
            <h4>Setting</h4>
            <a href="" title="">
              Clear all
            </a>
          </div>
          <div className="nott-list">
            <div className="notfication-details">
              <div className="noty-user-img">
                <img
                  src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/ny-img1.png"
                  alt=""
                />
              </div>
              <div className="notification-info">
                <h3>
                  <a
                    href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/"
                    title=""
                  >
                    Mo Danish
                  </a>{" "}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do.
                </p>
                <span>2 min ago</span>
              </div>
            </div>
            <div className="notfication-details">
              <div className="noty-user-img">
                <img
                  src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/ny-img2.png"
                  alt=""
                />
              </div>
              <div className="notification-info">
                <h3>
                  <a
                    href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/"
                    title=""
                  >
                    Salman Khan
                  </a>
                </h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <span>2 min ago</span>
              </div>
            </div>
            <div className="notfication-details">
              <div className="noty-user-img">
                <img
                  src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/ny-img3.png"
                  alt=""
                />
              </div>
              <div className="notification-info">
                <h3>
                  <a
                    href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/"
                    title=""
                  >
                    Naman Kumar
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                </p>
                <span>2 min ago</span>
              </div>
            </div>
            <div className="view-all-nots">
              <a
                href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/chat-box"
                title=""
              >
                View All Messsages
              </a>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Messages;
