import React, { Component } from "react";
import Nominee from "./nominee";
import AddNominee from "./addNominee";
class NomineeMainFrame extends Component {
  state = {};
  render() {
    return (
      <section className="companies-info">
        <div className="container">
          <div className="acc-setting">
            <div className="sd-title">
              <h3>My Nominee</h3>
            </div>
            <div className="companies-list friends-listdesign">
              <div className="row">
                {this.props.nominees.map((nominee) => (
                  <Nominee key={nominee} nominee={nominee} />
                ))}
                <AddNominee onClickAddNominee={this.props.onClickAddNominee} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NomineeMainFrame;
