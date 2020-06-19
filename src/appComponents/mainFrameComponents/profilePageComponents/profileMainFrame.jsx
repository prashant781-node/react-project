import React, { Component } from "react";
import CoverPicSection from "./coverpicSection";
import MainLeftBar from "../homePageComponents./home_main_left_side_bar";
import MainWsSec from "../homePageComponents./home_main_ws_sec";
import MainRightBar from "../homePageComponents./home_main_right_bar";
class ProfileMainFrame extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <CoverPicSection coverImgUrl={this.props.user.coverImgUrl} />
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                    <MainLeftBar user={this.props.user} />
                  </div>
                  <div className="col-lg-6 col-md-8 no-pd">
                    <MainWsSec user={this.props.user} />
                  </div>
                  <div className="col-lg-3 pd-right-none no-pd">
                    <MainRightBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default ProfileMainFrame;
