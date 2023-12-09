import "./Footer.css";
import youtubeSvg from "../../assets/images/youtube.svg";
import facebookPng from "../../assets/images/facebook.png";
import fvpLogo from "../../assets/images/FVPLOGO.svg";
import { Layout } from "antd";
const { Footer } = Layout;
const Footers = () => {
  return (
    <Footer className="footerContainer">
      <a href="https://www.youtube.com/user/sonido51">
        <img
          id="youtubeLogo"
          src={youtubeSvg}
          alt="YouTube Icon"
          style={{
            width: "40px",
            height: "40px",
          }}
        />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100064004774579&mibextid=LQQJ4d">
        {" "}
        <img
          id="facebookLogo"
          src={facebookPng}
          alt="Facebook Icon"
          style={{
            width: "40px",
            height: "40px",
            margin: "5px",
          }}
        />
      </a>
      <img
        id="fvpLogo"
        src={fvpLogo}
        alt="FVP Logo"
        style={{
          width: "10rem",
          height: "auto",
          padding: "0",
          margin: "0",
        }}
      />
      © 2023 Fox Valley Painters, LLC
    </Footer>
  );
};
export default Footers;
