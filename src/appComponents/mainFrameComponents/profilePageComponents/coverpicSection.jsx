import React, { Component } from "react";
class CoverPicSection extends Component {
  state = {};
  render() {
    return (
      <section class="cover-sec">
        <img src={this.props.coverImgUrl} alt="" />
        <div class="add-pic-box">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-lg-12 col-sm-12">
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
