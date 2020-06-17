import React, { Component } from 'react';
class SocialLinks extends Component {
    state = {}
    render() {
        return (<div className="suggestions full-width bt-1">
            <ul className="social_links">
                <li><a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/" title=""><i className="fa fa-rss"></i> News Feed</a></li>
                <li><a href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/" title=""><i className="fa fa-building"></i> Tranding By City</a></li>
            </ul>
        </div>);
    }
}

export default SocialLinks;