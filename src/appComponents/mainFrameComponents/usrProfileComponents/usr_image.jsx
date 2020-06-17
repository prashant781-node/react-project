import React, { Component } from 'react';
class UsrImage extends Component {
    render() {
        return (<div className="username-dt">
            <div className="usr-pic">
                <img src={this.props.user.profilePic} alt="" />
            </div>
        </div>);
    }
}

export default UsrImage;