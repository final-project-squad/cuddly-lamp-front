import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/home/Home"
import Main from "./components/main/Main"
import About from "./components/about/About"
import "./App.css"

function App() {
  //heroku please work 
  return (
    <Router>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/main">
        <Main />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      
    </Router>
  )
}

export default App