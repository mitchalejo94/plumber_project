import "./Footer.css";
import youtubeSvg from "../../assets/images/youtube.svg";
import facebookPng from "../../assets/images/facebook.png";
const Footer = () => {
  return (
    <footer
      // style={{ backgroundColor: "gray" }}
      className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top navbar navbar-dark bg-dark"
    >
      <p className="col-md-4 mb-0 ">© 2023 Fox Valley Painters, LLC</p>
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
              width: "30px",
              height: "30px",
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
              width: "30px",
              height: "30px",
            }}
          />
          <svg className="bi me-2" width="20" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
      </div>
      <ul className="nav col-md-4 justify-content-end">
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
  );
};
export default Footer;
