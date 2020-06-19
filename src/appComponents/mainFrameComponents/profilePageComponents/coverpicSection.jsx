import React, { Component } from "react";
class CoverPicSection extends Component {
  state = {};
  render() {
    return (
      <section className="cover-sec">
        <img src={this.props.coverImgUrl} alt="" />
        <div className="add-pic-box">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-12 col-sm-12">
                <input type="file" id="file" />
                <label for="file">Change Background</label>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CoverPicSection;
