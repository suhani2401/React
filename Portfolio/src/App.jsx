import { BrowserRouter as Router } from "react-router";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Strap from "./Components/Strap";
import Footer from "./Components/Footer";

function App () {
  return (
    <Router>
      <Header />
      <Home />
      <Strap />
      <Footer />
    </Router>
  )
}

export default App;
