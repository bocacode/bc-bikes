import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './scenes/About'
import Shop from './scenes/Shop'
import Sell from './scenes/Sell'
import Home from './scenes/Home'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/shop/:category" component={Shop} />
          <Route path="/shop" component={Shop} />
          <Route path="/sell" component={Sell} />
          <Route path="/" component={Home} />
        </Switch>
      <Footer />
    </Router>
  )
}

export default App
