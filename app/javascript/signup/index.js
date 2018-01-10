import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import SignUp from './components/SignUp'
// import reducer from './reducers'
// let store = createStore(reducer)

const main = document.querySelector('#signup')
ReactDOM.render((
  // <Provider store={store}>
    <Router>
      <SignUp />
    </Router>
  // </Provider>
), signup)
