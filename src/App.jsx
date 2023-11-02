import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/NavigationBar";
import "./scss/main.scss";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <NavigationBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
