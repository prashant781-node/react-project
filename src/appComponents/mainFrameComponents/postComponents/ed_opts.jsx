import React, { Component } from 'react';
class EdOpts extends Component {
    state = {}
    render() {
        return (<div className="ed-opts">
            <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
            <ul className="ed-options">
                <li><a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/" title=""><i className="fa fa-share-alt"></i>  Copy Link</a></li>
                <li><a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/" title=""><i className="fa fa-flag"></i>  Report Post</a></li>
            </ul>
        </div>);
    }
}

export default EdOpts;