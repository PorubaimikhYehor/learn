import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './containers/Header';
import Home from './containers/Home';
import {
  Header,
} from './components'

export default class App extends Component {

  render() {
    const menu = [
      {
        title: 'Home',
        path: '/',
      },
      {
        title: 'About',
        path: '/about',
      },
    ]
    return (
      <Router>
        <div>
          <Header data={menu} />
          <Route path='/'  component={Home} />

          {/* <Home /> */}
        </div>

      </Router>
    );
  }
}