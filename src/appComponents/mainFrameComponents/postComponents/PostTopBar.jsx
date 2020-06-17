import React, { Component } from 'react';
import UsrDt from '../usrProfileComponents/usrDt';
import EdOpts from './ed_opts';
class PostTopBar extends Component {
    state = {}
    render() {
        return (<div className="post_topbar">
            <UsrDt user={this.props.postUser} />
            <EdOpts />
        </div>);
    }
}

export default PostTopBar;