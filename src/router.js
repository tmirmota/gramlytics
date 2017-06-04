import React, { Component } from 'react';
<<<<<<< HEAD
import {
  BrowserRouter,
  Redirect,
  Route
} from 'react-router-dom';

// Components
import Home from './components/Home';
import App from './App';

=======
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';


>>>>>>> client-side-app
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
<<<<<<< HEAD
          <Route path='/' component={Home} />
          <Route path='dashboard/:username' component={App} />
=======
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={App} />
>>>>>>> client-side-app
        </div>
      </BrowserRouter>
    );
  }
}
