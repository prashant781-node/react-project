import React, { Component } from "react";
import JobStatusBar from "../../genericComponents/job_status_bar";
import JobDescription from "./job_description";
class Post extends Component {
  state = {};
  render() {
    const { post } = this.props;
    return (
      <React.Fragment>
        <JobDescription description={post.postDescription} />
        <div className="image-section">
          <img src={post.postImage} alt="" />
        </div>
        <JobStatusBar
          numberOfLikes={post.postLikes.length}
          numberOfComments={post.postComments.length}
        />
      </React.Fragment>
    );
  }
}

export default Post;
