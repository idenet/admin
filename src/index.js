import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './router/router'

// redux
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import reducers from './store/index'
// mock
import './mock/menu'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
<Provider store={store}>
    <Router />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
