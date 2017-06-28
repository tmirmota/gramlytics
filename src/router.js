import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

// Components
import Home from './Home'
import App from './App'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="dashboard/:username" component={App} />
          <Route path="/dashboard" component={App} />
        </div>
      </BrowserRouter>
    )
  }
}
