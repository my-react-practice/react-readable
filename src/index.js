import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AsyncApp from './containers/AsyncApp';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AsyncApp />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
