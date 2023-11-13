// import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="jumbotron">
      <h1>
        This is our About Us page Who we are? How long have been in the field?
        What locations do we cover?
      </h1>
      <div>
        <iframe
          src="https://storage.googleapis.com/maps-solutions-l6gd01pz5d/locator-plus/q1y7/locator-plus.html"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
export default About;
