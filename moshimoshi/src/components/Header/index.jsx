import React from "react";
import { BsDiscord, BsInstagram } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import Logo from "../Logo";

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
                  <BsDiscord size={"25px"} />
                </a>
              </li>
              <li>
                <a href="/">
                  <IoLogoTwitter size={"25px"} />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsInstagram size={"22px"} />
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
