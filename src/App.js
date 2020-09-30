import React from "react";
import Home from "./screen/Home";
import Contact from "./screen/Contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-white">
        <div className="relative min-h-screen">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}>
              {/* <Home /> */}
            </Route>
            <Route exact path="/contact" component={Contact}>
              {/* <Contact /> */}
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
