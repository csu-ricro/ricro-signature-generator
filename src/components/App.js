import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import { Route } from 'react-router-dom';
import config from '../assets/config';
import Page from '../Page';
import Output from './Output';
import Reducers from '../reducers';

const routes = [{ path: '/', component: Page }];

const App = () => (
  <AppFrame reducers={Reducers} config={createConfig(config)}>
    {routes.map(route => (
      <Route component={route.component} exact key={route.path} path={route.path} />
    ))}
  </AppFrame>
);

export default App;
