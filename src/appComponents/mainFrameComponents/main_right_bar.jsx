import React, { Component } from 'react';
class MainRightBar extends Component {
    state = {}
    render() {
        return (
            <div className="right-sidebar ">
                <div className="widget widget-jobs bt-1">
                    <div className="sd-title">
                        <h3>Advertisement</h3>
                    </div>
                    <div className="jobs-list advertisement">
                        <div className="job-info">
                            <a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/advertisement-detail">
                                <div className="image-advertiseing">
                                    <img src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/ad1.png" alt="" />
                                    <span className="pull-right">$999</span>
                                </div>
                                <div className="job-details">
                                    <h3>Lenovo Laptop modal 101 ultra</h3>
                                    <p>Noida || <span>20-04-2020</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="job-info">
                            <a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/advertisement-detail">
                                <div className="image-advertiseing">
                                    <img src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/ad2.png" alt="" />
                                    <span className="pull-right">$999</span>
                                </div>
                                <div className="job-details">
                                    <h3>Legal Consultancy Advice</h3>
                                    <p>Noida || <span>22-04-2020</span></p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <ul className="user-fw-status text-center">
                        <li><a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/advertisement" title="">View All</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainRightBar;