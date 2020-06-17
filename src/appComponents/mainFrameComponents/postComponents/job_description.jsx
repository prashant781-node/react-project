import React, { Component } from 'react';
class JobDescription extends Component {
    render() {
        return (<div className="job_descp">
            <p>{this.props.description}<a href="" title="">view more</a></p>
        </div>);
    }
}

export default JobDescription;