import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/navigationBar/NavigationBar";
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import "./scss/main.scss";
import "./App.css";
import Project from "./components/project/Projects";

function App() {
  return (
    <Router>
      <>
        <Header />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
