import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'

// Needed for Material UI on TouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render(<Router />, document.getElementById('root'))
