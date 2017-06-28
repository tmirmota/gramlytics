import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './router'

// Needed for Material UI
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render(<Router />, document.getElementById('root'))
