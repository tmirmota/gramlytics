import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './index.css';

// Needed for Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
