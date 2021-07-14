import React, { createContext, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './scenes/Login'
import About from './scenes/About'
import Shop from './scenes/Shop'
import Sell from './scenes/Sell'
import Home from './scenes/Home'
import Footer from './components/Footer'

export const AuthContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      <Router>
        <Navbar />
        <section className="main">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/shop/:category" component={Shop} />
            <Route path="/shop" component={Shop} />
            <Route path="/sell" component={Sell} />
            <Route path="/" component={Home} />
          </Switch>
        </section>
        <Footer />
      </Router>
    </AuthContext.Provider>
  )
}

export default App
