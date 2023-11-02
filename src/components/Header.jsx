import "./Header.css";
const Header = () => {
  return (
    <div id="header">
      {/* {import.meta.env.VITE_API_URL} */}
      <h1 className="title"> ABC Electrical and Plumbing</h1>
      <div className="info">
        <h1 id="contactInfo">Phone:</h1>
        <h1 id="location">Location:</h1>
      </div>
    </div>
  );
};
export default Header;
