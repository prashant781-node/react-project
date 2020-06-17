import React, { Component } from "react";
import NavBar from "./appComponents/navBar";
import MainFrame from "./appComponents/mainFrame";
import AddPost from "./appComponents//mainFrameComponents/postComponents/addPost";
import Footer from "./appComponents/footer";
import getUser from "./userData";

class App extends Component {
  state = {
    user: getUser("1"),
  };
  render() {
    return (
      <div className="wrapper">
        <NavBar user={this.state.user} />
        <MainFrame user={this.state.user} />
        <AddPost user={this.state.user} />
        <Footer />
      </div>
    );
  }
}

export default App;
