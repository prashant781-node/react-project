import React, { Component } from "react";
import MainLeftBar from "./home_main_left_side_bar";
import MainWsSec from "./home_main_ws_sec";
import MainRightBar from "./home_main_right_bar";

class MainFrame extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default MainFrame;
