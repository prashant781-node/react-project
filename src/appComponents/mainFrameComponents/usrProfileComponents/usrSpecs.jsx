import React, { Component } from 'react';
import ProfileProgress from "./profileProgress"
class UsrSpecs extends Component {
    state = {}
    render() {
        return (<div className="user-specs">
            <h3>{`${this.props.user.userFirstName} ${this.props.user.userLastName}`}</h3>
            <div className="wrapper profile-process">
                <ProfileProgress />
            </div>
        </div>);
    }
}

export default UsrSpecs;