import './App.css';

import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>

        <Navbar heading="inshorts"/>
        <Switch>
          <Route exact path="/"> <News key="general" pageSize={12} country="in" caregory="general"/> </Route>
          <Route exact path="/business"> <News key="business" pageSize={12} country="in" caregory="business"/> </Route>
          <Route exact path="/entertainment"> <News key="entertainment" pageSize={12} country="in" caregory="entertainment"/> </Route>
          <Route exact path="/health"> <News key="health" pageSize={12} country="in" caregory="health"/> </Route>
          <Route exact path="/science"> <News key="science" pageSize={12} country="in" caregory="science"/> </Route>
          <Route exact path="/sports"> <News key="sports" pageSize={12} country="in" caregory="sports"/> </Route>
          <Route exact path="/technology"> <News key="technology" pageSize={12} country="in" caregory="technology"/> </Route>
          
          </Switch>
        </Router>
        
      </div>
    )
  }
}
