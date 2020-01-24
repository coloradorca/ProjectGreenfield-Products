// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App.jsx';
// ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App.jsx';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

// store.dispatch(getAllProducts())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
