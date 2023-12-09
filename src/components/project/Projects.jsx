import "./Projects.css";
import React from "react";
import { Carousel } from "antd";
// import Basement from "../../assets/images/Projects/Basement.PNG";
import ceiling from "../../assets/images/Projects/ceiling.jpg";
// import Deck from "../../assets/images/Projects/Deck.JPG";
// import DeckStairs from "../../assets/images/Projects/DeckStairs.";
import kitchenSink from "../../assets/images/Projects/kitchenSink.jpeg";
import Plumbing from "../../assets/images/Projects/Plumbing.jpg";

const contentStyle = {
  margin: 0,
  height: "460px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Project = () => {
  return (
    // <div className="jumbotron" id="projectJumbotron">
    //   <h1 className="title">
    //     {" "}
    //     This is where we will have a listing about our jobs/projects
    //   </h1>
    //   <div className="row no-gutters">
    //     <div className="col-md-4">
    //       <img
    //         src="https://lp-seotool.s3.us-west-2.amazonaws.com/task_attachments/NJYIZcSAE5ODTImqJirgg7kunj18e3wK1598976088.jpg"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <h5 className="card-title">Plumbing job</h5>
    //         <p className="card-text">
    //           Enter text about experience in the plumber field
    //         </p>
    //         <p className="card-text">
    //           <small className="text-muted">
    //             Maybe include date of when project was done.
    //           </small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row no-gutters">
    //     <div className="col-md-4">
    //       <img
    //         src="https://trdsf.com/cdn/shop/articles/working-with-electrical-wires.png?v=1681838579"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <h5 className="card-title">Electrical job</h5>
    //         <p className="card-text">
    //           Enter text about experience in the electrical field
    //         </p>
    //         <p className="card-text">
    //           <small className="text-muted">
    //             Maybe include date of when project was done.
    //           </small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img src={ceiling} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={kitchenSink} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={Plumbing} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
export default Project;
