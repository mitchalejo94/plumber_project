// import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="jumbotron" id="homeJumbotron">
        {/* <h1 className="display-4">Fox Valley Painters</h1> */}
        <p className="jobList">
          <li>General Remodeling</li>
          <li>Electric Work</li>
          <li>Plumbing</li>
          <li>Painting</li>
          <li>Drywall</li>
          <li>Framing</li>
          <li>Wood Floor Installation</li>
          <li>Tile Installation</li>
        </p>
        <hr className="my-4" />
      </div>
    </div>
  );
};
export default Home;
