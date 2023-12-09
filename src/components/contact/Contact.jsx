import "./contact.css";
// import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
const Contact = () => {
  return (
    <div className="jumbotron" id="contact">
      <h1 id="">
        Contact us today to schedule an appointment and receive a comprehensive
        estimate tailored to your project needs.{" "}
      </h1>
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
