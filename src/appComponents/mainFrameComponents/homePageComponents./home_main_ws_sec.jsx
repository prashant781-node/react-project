import React, { Component } from "react";
import SectionAbovePost from "../postComponents/above_post_section";
import PostSection from "../postComponents/posts_section";

class MainWsSec extends Component {
  state = {};
  render() {
    return (
      <div className="main-ws-sec">
        <SectionAbovePost />
        <PostSection user={this.props.user} />
      </div>
    );
  }
}

export default MainWsSec;
