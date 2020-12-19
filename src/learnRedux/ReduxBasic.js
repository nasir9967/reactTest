import React from 'react';
import { Provider } from 'react-redux'
/* import store from './store'

import App from './App' */

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)