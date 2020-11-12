// ------------------------------ import libraries
import React from 'react';
import ReactDom from 'react-dom';

// ------------------------------ import components
import { Provider } from 'react-redux';
import { App } from './router/App';
import { generateStore } from './store';

// ------------------------------ import styles and images
import { GlobalStyles } from './global-styles/GlobalStyles';

// ------------------------------------ ENTRY POINT ------------------------------------//
// This is the entry point.
// We use hot module replacement from webpack to prevent the browser reload in development
// The App component is wrapped in the Redux Provider to use the global store

const store = generateStore();

function render() {
  ReactDom.render(
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>,

    document.getElementById('root'),
  );
}

render();

// This function prevent the browser reload in development
if (module.hot) {
  module.hot.accept('./router/App', () => render());
}
