import "./Footer.css";
import youtubeSvg from "../../assets/images/youtube.svg";
import facebookPng from "../../assets/images/facebook.png";
import fvpLogo from "../../assets/images/FVPLOGO.svg";

const Footer = () => {
  return (
    <footer
      // style={{ backgroundColor: "gray" }}
      className=" footerContainer "
    >
      <p className=" name-logo">
        {" "}
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
      </p>
      <div className="copyright">{""}© 2023 Fox Valley Painters, LLC</div>
      <div className="logos">
        <a
          href="https://www.facebook.com/profile.php?id=100064004774579&mibextid=LQQJ4d"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          {" "}
          <img
            id="facebookLogo"
            src={facebookPng}
            alt="Facebook Icon"
            style={{
              width: "40px",
              height: "40px",
              padding: "0",
            }}
          />
          <svg className="bi me-2" width="20" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/user/sonido51"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img
            id="youtubeLogo"
            src={youtubeSvg}
            alt="YouTube Icon"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <svg className="bi me-2" width="20" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
      </div>
      <ul className="nav col-md-4 justify-content-end footerLinks">
        <li className="nav-item">
          <a href="/" className="nav-link px-2">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link px-2 ">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a href="/project" className="nav-link px-2 ">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link px-2 ">
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
    // <footer class="MuiBox-root css-9jyc04">
    //   <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
    //     <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
    //       My sticky footer can be found here.
    //     </p>
    //     <p class="MuiTypography-root MuiTypography-body2 css-u30lmt">
    //       Copyright ©{" "}
    //       <a
    //         class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1i1yl23"
    //         href="https://mui.com/"
    //       >
    //         Your Website
    //       </a>{" "}
    //     </p>
    //   </div>
    // </footer>
  );
};
export default Footer;
