import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Hello, Customers. This is our Home page.!</h1>
        <p className="lead">
          Enter text aboout who we are and where we serve. Maybe a mission
          statement?
        </p>
        <hr className="my-4" />
        <p>Maybe include a picture of the team or the Logo?</p>
      </div>
    </div>
  );
};
export default Home;
