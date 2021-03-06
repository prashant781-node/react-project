import React, { Component } from "react";
import SearchBar from "./genericComponents/searchBar";
import Nav from "./genericComponents/navigation";
import Logo from "./genericComponents/logoHyperlink";
import MenuBtn from "./genericComponents/menu_btn";
import UsrAccount from "./genericComponents/usrAccount";

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="header-data">
            <Logo />
            <SearchBar />
            <Nav
              onHomeClick={this.props.onHomeClick}
              onFriendsClick={this.props.onFriendsClick}
            />
            <MenuBtn />
            <UsrAccount
              user={this.props.user}
              onClickNominee={this.props.onClickNominee}
              onClickMyProfile={this.props.onClickMyProfile}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
