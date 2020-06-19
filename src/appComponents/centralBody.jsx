import React, { Component } from "react";
import FriendsMainFrame from "./mainFrameComponents/friendsPageComponents/friends_main_frame";
import MainFrame from "./mainFrameComponents/homePageComponents./home_main_Frame";
import AddPost from "./mainFrameComponents/postComponents/addPost";
import NomineeMainFrame from "./mainFrameComponents/nomineePageComponents/nominee_main_frame";
import AddNomineeForm from "./mainFrameComponents/nomineePageComponents/addNomineeForm";
class CentralBody extends Component {
  state = {};
  render() {
    if (this.props.page === "friends")
      return <FriendsMainFrame friends={this.props.user.friends} />;
    if (this.props.page === "nominee")
      return (
        <NomineeMainFrame
          nominees={this.props.user.nominees}
          onClickAddNominee={this.props.onClickAddNominee}
        />
      );
    if (this.props.page === "addNominee") return <AddNomineeForm />;
    return (
      <React.Fragment>
        <MainFrame user={this.props.user} />
        <AddPost user={this.props.user} />
      </React.Fragment>
    );
  }
}

export default CentralBody;
