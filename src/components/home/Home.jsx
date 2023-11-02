import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div class="jumbotron">
        <h1 class="display-4">Hello, Customers. This is our Home page.!</h1>
        <p class="lead">
          Enter text aboout who we are and where we serve. Maybe a mission
          statement?
        </p>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
};
export default Home;
