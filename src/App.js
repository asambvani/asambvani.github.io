import React, { Component } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'
import logo from './logo.svg';
import { Menu,Card,Grid } from 'semantic-ui-react'
import Blog from './blog'
import Resources from './resources'
import Header from './header'
import Intro from './intro'
import Footer from './footer'
import './App.css';


class App extends Component {
  state = {
    redirect: false,
    destination: ''
  }

    render() {
    window.location.hash = "asdfasdf"
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="app-body">
            <Route exact path ='/' component={Blog}/>
            <Route exact path ='/blog' component={Blog}/>
            <Route exact path ='/resources' component={Resources}/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
