import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
// import reducer from './reducers';
import App from './components/App.jsx';

// const middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

// const store = createStore(reducer, applyMiddleware(...middleware));

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
