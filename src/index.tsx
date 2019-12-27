import './index.sass'
import App from './App'
import React from 'react'
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker'

render(<App />, document.getElementById('root'))

// App can work offline and load faster using unregister
serviceWorker.unregister()
