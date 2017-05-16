import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  Provider
} from 'react-redux';
import {
  createStore
} from 'redux';

import App from './App';
import reducer from '../reducers';
import config from '../config.json';

const store = createStore(
  reducer,
  config.defaults,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(config.muiTheme)}>
        <App />
      </MuiThemeProvider>
    </Provider>,
    div
  );
});
