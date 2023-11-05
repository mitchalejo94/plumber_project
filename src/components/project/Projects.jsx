import "./Projects.css";
const Project = () => {
  return (
    <div>
      <h1 className="title">
        {" "}
        This is where we will have a listing about our jobs/projects
      </h1>
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
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src="https://trdsf.com/cdn/shop/articles/working-with-electrical-wires.png?v=1681838579"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Electrical job</h5>
            <p className="card-text">
              Enter text about experience in the electrical field
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
export default Project;
