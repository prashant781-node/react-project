import React, { Component } from "react";
import Post from "./post";
import Spinner from "../../genericComponents/spinner";
import PostTopBar from "./PostTopBar";
class PostSection extends Component {
  renderPosts(user) {
    return user.posts.map((post) => {
      return (
        <div className="post-bar">
          <PostTopBar postUser={user} />
          <Post post={post} />
        </div>
      );
    });
  }

  render() {
    const { user } = this.props;
    return (
      <div className="posts-section">
        {this.renderPosts(user)}
        <div className="process-comm">
          <Spinner />
        </div>
      </div>
    );
  }
}

export default PostSection;
