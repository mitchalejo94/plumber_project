import "./contact.css";
// import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
const Contact = () => {
  return (
    <div className="jumbotron" id="contact">
      <h1 id="">For a free estimate contact us at ____ </h1>
      <h1>Include link for youtube and Facebook.</h1>
      <h1>Business hours </h1>
      <div>
        <a href="https://www.youtube.com/user/sonido51">youtube</a>
      </div>
      <div>
        {" "}
        <a href="https://www.facebook.com/profile.php?id=100064004774579&mibextid=LQQJ4d">
          {" "}
          Follow us on Facebook
        </a>
      </div>
    </div>
  );
};
export default Contact;
