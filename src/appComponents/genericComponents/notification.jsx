import React, { Component } from 'react';
class Notification extends Component {
    state = {}
    render() {
        return (<li>
            <a href="#" title="" className="not-box-open">
                <span>
                    <img
                        src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/icon7.png"
                        alt=""
                    />
                </span>
                Notification
</a>
            <div className="notification-box noti" id="notification">
                <div className="nt-title">
                    <h4>Setting</h4>
                    <a href="#" title="">
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
                                    Amit Sharma
        </a>{" "}
                                Comment on your project.
      </h3>
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
                                    Mo Kamil
        </a>{" "}
                                Comment on your project.
      </h3>
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
                                    Al Habib Ahamed
        </a>{" "}
                                Comment on your project.
      </h3>
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
                                    Nisar Ali
        </a>{" "}
                                Comment on your project with liream.
      </h3>
                            <span>2 min ago</span>
                        </div>
                    </div>
                    <div className="view-all-nots">
                        <a
                            href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/notification"
                            title=""
                        >
                            View All Notification
    </a>
                    </div>
                </div>
            </div>
        </li>);
    }
}

export default Notification;