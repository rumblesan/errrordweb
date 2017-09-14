import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'style/index.css';
import 'style/pure/base.css';
import 'style/pure/forms.css';
import 'style/pure/buttons.css';

import App from 'containers/App/container';

import configureStore from 'store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
