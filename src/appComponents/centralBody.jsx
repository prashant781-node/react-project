import React, { Component } from "react";
import FriendsMainFrame from "./mainFrameComponents/friendsPageComponents/friends_main_frame";
import MainFrame from "./mainFrameComponents/homePageComponents./home_main_Frame";
import AddPost from "./mainFrameComponents/postComponents/addPost";
class CentralBody extends Component {
  state = {};
  render() {
    if (this.props.page === "friends")
      return <FriendsMainFrame friends={this.props.user.friends} />;
    return (
      <React.Fragment>
        <MainFrame user={this.props.user} />
        <AddPost user={this.props.user} />
      </React.Fragment>
    );
  }
}

export default CentralBody;
