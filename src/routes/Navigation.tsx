

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName="nav-active"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" >About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about"/>
            
          <Route path="/users"/>
            
          <Route path="/"/>
            
        </Switch>
      </div>
    </Router>
  );
}
