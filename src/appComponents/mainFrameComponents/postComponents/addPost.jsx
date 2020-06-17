import React, { Component } from "react";
class AddPost extends Component {
  state = {};
  render() {
    return (
      <div className="post-popup job_post addstory">
        <div className="post-project">
          <div className="modal-content">
            <div className="modal-header">Add New Post</div>
            <div className="modal-body">
              <form className="form center-block">
                <div className="form-group">
                  <textarea
                    className="form-control input-lg"
                    autoFocus=""
                    placeholder="What do you want to share?"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div>
                <button
                  className="btn btn-primary btn-sm"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  Post
                </button>
                <ul className="pull-left list-inline addionss">
                  <li>
                    <a href="">
                      <i className="fa fa-upload"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-camera"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-headphones"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-map-marker"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a href="#" title="">
            <i className="la la-times-circle-o"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default AddPost;
