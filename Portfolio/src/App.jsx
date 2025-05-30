import { BrowserRouter as Router } from "react-router";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App () {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  )
}

export default App;
