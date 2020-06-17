import React, { Component } from 'react';
class ProfileProgress extends Component {
    render() {
        return (<div className="progress-tooltip">
            <span className="progress-tooltip-info" style={{ left: "75%" }}>75%</span>
            <progress className="progress" value="75" max="100">75%</progress>
            <p className="pull-left text-left w-100">0MB <span className="pull-right">1GB</span></p>
        </div >);
    }
}

export default ProfileProgress;