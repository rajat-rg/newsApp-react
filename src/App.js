import './App.css';

import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
// import News from './components/News';
import NewsIS from './components/NewsIS';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  state={progress:10}
  apiKey = process.env.REACT_APP_NEWS_API
  setProgress = (progress) => {
    this.setState({ progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Navbar heading="inshorts"/>
        {/* <Switch>
          <Route exact path="/"> <News key="general" pageSize={12} country="in" caregory="general"/> </Route>
          <Route exact path="/business"> <News key="business" pageSize={12} country="in" caregory="business"/> </Route>
          <Route exact path="/entertainment"> <News key="entertainment" pageSize={12} country="in" caregory="entertainment"/> </Route>
          <Route exact path="/health"> <News key="health" pageSize={12} country="in" caregory="health"/> </Route>
          <Route exact path="/science"> <News key="science" pageSize={12} country="in" caregory="science"/> </Route>
          <Route exact path="/sports"> <News key="sports" pageSize={12} country="in" caregory="sports"/> </Route>
          <Route exact path="/technology"> <News key="technology" pageSize={12} country="in" caregory="technology"/> </Route>
          
          </Switch> */}
        <Switch>
          <Route exact path="/"> <NewsIS setProgress={this.setProgress} apiKey={this.apiKey} key= "general" pageSize={12} country="in" caregory="general"/> </Route>
          <Route exact path="/business"> <NewsIS setProgress={this.setProgress} apiKey={this.apiKey} key= "business" pageSize={12} country="in" caregory="business"/> </Route>
          <Route exact path="/entertainment"> <NewsIS setProgress={this.setProgress} apiKey={this.apiKey} key= "entertainment" pageSize={12} country="in" caregory="entertainment"/> </Route>
          <Route exact path="/health"> <NewsIS setProgress={this.setProgress} apiKey={this.apiKey} key= "health" pageSize={12} country="in" caregory="health"/> </Route>
          <Route exact path="/science"> <NewsIS setProgress={this.setProgress} apiKey={this.apiKey} key= "science" pageSize={12} country="in" caregory="science"/> </Route>
          <Route exact path="/sports"> <NewsIS setProgress={this.setProgress} apiKey={this.apiKey} key= "sports" pageSize={12} country="in" caregory="sports"/> </Route>
          <Route exact path="/technology"> <NewsIS setProgress={this.setProgress} apiKey={this.apiKey} key= "technology" pageSize={12} country="in" caregory="technology"/> </Route>
          
          </Switch>
        </Router>
        
      </div>
    )
  }
}
