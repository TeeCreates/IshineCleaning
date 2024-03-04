// import logo from './logo.svg';
// import './App.css';
import * as React from "react"
import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {About} from "./About";
import {Services} from "./Services";
import { Contact } from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [message, setMessage] = React.useState("no message");
  React.useEffect(()=>{
    fetch("/fetch-message").then((res)=>
    res
    .json()
    .then((data)=> setMessage(data.message))
    .catch((e)=> console.log("got error", e))
    );
  }, [])
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
       <About/>
            </Route>
            <Route exact path="/services">
       <Services/>
            </Route>
            <Route exact path="/contact">
       <Contact/>
            </Route>
          </Switch>
          {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
