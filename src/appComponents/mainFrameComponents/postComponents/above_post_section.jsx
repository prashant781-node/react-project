import React, { Component } from 'react';
class SectionAbovePost extends Component {
    state = {}
    render() {
        return (<div className="post-topbar">
            <div className="post-st">
                <ul>
                    <li><a className="post-jb" href="#" title=""><span><i className="fa fa-plus-circle"></i></span> Add to your Story</a></li>
                    <li><a className=" active" href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/" title=""><span><i className="fa fa-video-camera"></i></span> Live Now</a></li>
                </ul>
            </div>
        </div>);
    }
}

export default SectionAbovePost;