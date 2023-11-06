import "./Footer.css";
import Nav from "react-bootstrap/Nav";
import youtubeSvg from "../../assets/images/youtube.svg";
import facebookPng from "../../assets/images/facebook.png";
const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-muted">
            © 2023 Fox Valley Painters, LLC
          </span>
        </div>
        <div className="footerLinks">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/project">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </div>
        <div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a href="https://www.youtube.com/user/sonido51">
                <img id="youtubeLogo" src={youtubeSvg} alt="YouTube Icon" />
              </a>
            </li>
            <li className="ms-3">
              <a href="https://www.facebook.com/profile.php?id=100064004774579&mibextid=LQQJ4d">
                {" "}
                <img id="facebookLogo" src={facebookPng} alt="Facebook Icon" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
