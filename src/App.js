import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/home/Home"
import "./App.css"
import Header from "./components/header/header"

function App() {
  //heroku please work 
  return (
    <Router>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/main">
        <Header />
      </Route>
    </Router>
    
  )
}

export default App