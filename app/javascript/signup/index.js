import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import SignUp from './components/SignUp';


// import reducer from './reducers'
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

const main = document.querySelector('#signup');

render((
  <Provider store={store}>
    <Router>
      <SignUp />
    </Router>
  </Provider>
), signup)