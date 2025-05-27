import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ toggleSidebar }) {
  return (
    <div className="header">
      <p className="header-btn" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </p>
      <div className="headerTop">
        <div className="headerSearch">
          <div className="headerSearchSimbol">
            <img
              src="/images/search.png"
              alt="searchIcon"
              className="searchIcon"
            />
          </div>
          <div className="headerSearchBar"></div>
        </div>
        <div className="headerProfile">
          <a href="#">
            <img
              src="/images/bell.png"
              alt="Notification icon"
              className="headerProfileNotificationSimbol"
            />
          </a>
          <a href="#">
            <img
              src="/images/morgan.svg"
              alt="Photo Profile"
              className="headerProfilePhoto"
            />
          </a>
          <div className="headerProfileName">Morgan Oakley</div>
        </div>
      </div>

      <div className="headerTitlePage">
        <div className="headerTilePageLeft">
          <a href="#">
            <img
              src="/images/morgan.svg"
              alt="Photo Profile"
              className="profileMeanPhoto"
            />
          </a>
          <div className="profileHiAndName">
            <div className="profileHi">Hi there,</div>
            <div className="profileName">Morgan Oakley (@morgan)</div>
          </div>
        </div>
        <div className="headerButtons">
          <button className="new-button">New</button>
          <button className="upload-button">Upload</button>
          <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
