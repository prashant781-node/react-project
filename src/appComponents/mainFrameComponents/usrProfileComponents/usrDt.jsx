import React, { Component } from 'react';
class UsrDt extends Component {
    state = {}
    render() {
        return (
            <div className="usy-dt">
                <img src={this.props.user.postTopBarImage} alt="" />
                <div className="usy-name">
                    <h3>{`${this.props.user.userFirstName} ${this.props.user.userLastName}`}</h3>
                    <span><img src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/clock.png" alt="" />3 min ago</span>
                </div>
            </div>
        );
    }
}

export default UsrDt;