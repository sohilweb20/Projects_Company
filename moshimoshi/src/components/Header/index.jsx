import React from "react";

import Discord from "../Discord";
import InstaGram from "../Instagram";
import Logo from "../Logo";
import Twitter from "../Twitter";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar-seaction">
          <div className="logo-wrapper">
            <Logo />
            <span className="logo-text">metasky</span>
          </div>
          <div className="social-media-handles">
            <ul>
              <li>
                <a href="/">
                  <Discord />
                </a>
              </li>
              <li>
                <a href="/">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="/">
                  <InstaGram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
