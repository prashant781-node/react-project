import React, { Component } from 'react';
class JobStatusBar extends Component {
    state = {}
    render() {
        const { numberOfLikes, numberOfComments } = this.props
        return (<div className="job-status-bar">
            <ul className="like-com">
                <li><a href="#" className="com"><i className="fa fa-thumbs-up"></i> {`Like ${numberOfLikes}`}</a></li>
                <li><a href="#" className="com"><i className="fa fa-comments-o"></i> {`Comment ${numberOfComments}`}</a></li>
            </ul>
        </div>);
    }
}

export default JobStatusBar;