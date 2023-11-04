import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-muted">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="contact" className="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">
          © 2023 ABC ELECTRICAL AND PLUMBING, Inc
        </p>
      </footer>
    </div>
  );
};
export default Footer;
