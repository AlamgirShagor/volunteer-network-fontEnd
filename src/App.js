import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar.js';
import HelpItem from './components/HelpItem/HelpItem';
import Register from './components/Register/Register'
import Login from './components/Login/Login';
import PeivateRoute from './components/PrivateRoute/PeivateRoute';
import Event from './components/Event/Event';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <div className="App">
      

      <Router>
      <Switch>
          <PeivateRoute path="/register">
            <Register></Register>
          </PeivateRoute>
          
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/event">
            <Event></Event>
          </Route>
          <Route path="/">
            <Header></Header>
            <SearchBar></SearchBar>
            <HelpItem></HelpItem>
          </Route>
        </Switch>
      </Router>

    </div>
    </UserContext.Provider>
  );
}

export default App;
