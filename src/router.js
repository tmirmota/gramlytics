import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';


export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/instagram-callback' component={App} />
        </div>
      </BrowserRouter>
    );
  }
}
