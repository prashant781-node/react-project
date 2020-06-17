import React, { Component } from 'react';
import SearchBar from "./genericComponents/searchBar";
import Nav from "./genericComponents/navigation"
import Logo from "./genericComponents/logoHyperlink"
import MenuBtn from './genericComponents/menu_btn';
import UsrAccount from "./genericComponents/usrAccount"


class NavBar extends Component {
    render() {
        return (<header>
            <div className="container">
                <div className="header-data">
                    <Logo />
                    <SearchBar />
                    <Nav />
                    <MenuBtn />
                    <UsrAccount user={this.props.user} />
                </div>
            </div>
        </header>
        );
    }
}

export default NavBar;


