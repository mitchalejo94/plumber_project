// import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src="https://lp-seotool.s3.us-west-2.amazonaws.com/task_attachments/NJYIZcSAE5ODTImqJirgg7kunj18e3wK1598976088.jpg"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Plumbing job</h5>
            <p className="card-text">
              Enter text about experience in the plumber field
            </p>
            <p className="card-text">
              <small className="text-muted">
                Maybe include date of when project was done.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
