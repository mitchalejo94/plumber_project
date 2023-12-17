// import React from "react";
import "./Header.css";
import fvpLogo from "../../assets/images/FVPLOGO.svg";

const Header = () => {
  return (
    <div id="header" className="shift-left">
      <div className="logo-container">
        <img
          id="fvpLogo"
          src={fvpLogo}
          alt="FVP Logo"
          style={{
            width: "40rem",
            height: "auto",
          }}
        />
      </div>
      <div className="content-container">
        <h1 className="FoxValleyTitle">
          <div className="fvpTitle">Fox Valley Painters</div>
          <div className="phoneTag">
            <a id="phoneTagid" href="tel:8473466654">
              847-346-6654
            </a>
          </div>
        </h1>
      </div>
    </div>
  );
};
export default Header;
