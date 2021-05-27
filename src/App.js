import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/HomePage/Home/Home";
import Login from "./Component/Login/Login";
import Navbar from "./Component/Navbar/Navbar";
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import './App.css';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import About from './Component/About/About';
import Notice from './Component/Notice/Notice';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route path="/aboutUs">
            <About></About>
          </Route>
          <PrivateRoute path="/profile">
            <Profile></Profile>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/services">
            <Profile></Profile>
          </Route>
          <Route path="/notice">
            <Notice></Notice>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
