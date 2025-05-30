import { BrowserRouter as Router } from "react-router";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Strap from "./Components/Strap";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App () {
  return (
    <Router>
      <Header />
      <Home />
      <Strap />
      <About />
      {/* <Footer /> */}
    </Router>
  )
}

export default App;
