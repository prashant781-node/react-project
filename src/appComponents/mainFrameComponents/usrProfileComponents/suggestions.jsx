import React, { Component } from 'react';
class Suggestions extends Component {
    state = {}
    render() {
        return (<div className="suggestions full-width ">
            <div className="sd-title">
                <h3>Suggestions</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="suggestions-list">
                <div className="suggestion-usd">
                    <img src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/s1.png" alt="" />
                    <div className="sgt-text">
                        <h4>Jiya khan</h4>
                        <span>2 Mutual Friend</span>
                    </div>
                    <span><i className="la la-plus"></i></span>
                </div>
                <div className="suggestion-usd">
                    <img src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/s2.png" alt="" />
                    <div className="sgt-text">
                        <h4>Mo Salman</h4>
                        <span>5 Mutual Friend</span>
                    </div>
                    <span><i className="la la-plus"></i></span>
                </div>
                <div className="suggestion-usd">
                    <img src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/s3.png" alt="" />
                    <div className="sgt-text">
                        <h4>Danish Khan</h4>
                        <span>1 Mutual Friend</span>
                    </div>
                    <span><i className="la la-plus"></i></span>
                </div>
                <div className="suggestion-usd">
                    <img src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/s4.png" alt="" />
                    <div className="sgt-text">
                        <h4>Mohit Gupta</h4>
                        <span>2 Mutual Friend</span>
                    </div>
                    <span><i className="la la-plus"></i></span>
                </div>
                <div className="suggestion-usd">
                    <img src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/s5.png" alt="" />
                    <div className="sgt-text">
                        <h4>Jiva Khan</h4>
                        <span>4 Mutual Friend</span>
                    </div>
                    <span><i className="la la-plus"></i></span>
                </div>
                <div className="suggestion-usd">
                    <img src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/s6.png" alt="" />
                    <div className="sgt-text">
                        <h4>Hamid Ansari</h4>
                        <span>1 Mutual Friend</span>
                    </div>
                    <span><i className="la la-plus"></i></span>
                </div>
                <div className="view-more">
                    <a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/" title="">View More</a>
                </div>
            </div>
        </div>);
    }
}

export default Suggestions;