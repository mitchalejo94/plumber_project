import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/NavigationBar";
import About from "./components/about/About";
import "./scss/main.scss";
import "./App.css";

function App() {
  const [mainSection, setMainSection] = useState("home");
  const toggleSection = (section) => {
    setMainSection(section);
  };

  return (
    <>
      <Header />
      <NavigationBar />
      {mainSection === "home" && <Home />}
      {mainSection === "about" && <About />}
      {/* {currentSection === "contact" && <Contact />} */}
      {/* <Home />
      <About /> */}
      <Footer />
    </>
  );
}

export default App;
