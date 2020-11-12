// ------------------------------ import libraries
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

// ------------------------------ import components
import { generateStore } from '../store';

const store = generateStore();
const history = createBrowserHistory();

export const ProviderMock = (props) => {
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>;
};
