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

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App';
import reducer from './reducers';
import config from './config.json';

const store = createStore(
  reducer,
  config.defaults,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(config.muiTheme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
