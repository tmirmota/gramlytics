import React, { Component } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route
} from 'react-router-dom';

// Components
import Home from './components/Home';
import App from './App';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Home} />
          <Route path='dashboard/:username' component={App} />
        </div>
      </BrowserRouter>
    );
  }
}
