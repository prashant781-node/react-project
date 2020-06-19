import React, { Component } from "react";
import getUser from "./userData";
import CentralBody from "./appComponents/centralBody";
import NavBar from "./appComponents/navBar";
import Footer from "./appComponents/footer";

class App extends Component {
  state = {
    user: getUser("123"),
    pageDisplayed: "home",
  };
  handlePageDisplayed = (page) => {
    this.setState({ pageDisplayed: page });
  };

  render() {
    return (
      <div className="wrapper" style={{ backgroundColor: "rgb(240,240,240)" }}>
        <NavBar
          user={this.state.user}
          onHomeClick={() => this.handlePageDisplayed("home")}
          onFriendsClick={() => this.handlePageDisplayed("friends")}
          onClickNominee={() => this.handlePageDisplayed("nominee")}
          onClickMyProfile={() => this.handlePageDisplayed("myProfile")}
        />
        <CentralBody
          user={this.state.user}
          page={this.state.pageDisplayed}
          onClickAddNominee={() => this.handlePageDisplayed("addNominee")}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
