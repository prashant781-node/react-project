import React, { Component } from "react";
class Footer extends Component {
  state = {
    links: [
      "Help Centre",
      "About Us",
      "Privacy Policy",
      "Community Guidelines",
      "Cookies Policy",
      "Career",
      "Forum",
      "Language",
      "Copyright Policy",
    ],
  };
  renderFooterLinks() {
    return this.state.links.map((link) => {
      return (
        <li key={link}>
          <a
            href="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/"
            title=""
          >
            {link}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <footer>
        <div className="footy-sec mn no-margin">
          <div className="container">
            <ul>{this.renderFooterLinks()}</ul>
            <p>
              <img
                src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/copy-icon2.png"
                alt=""
              />
              Copyright 2020
            </p>
            <img
              className="fl-rgt"
              src="http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/logo2.png"
              alt=""
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
