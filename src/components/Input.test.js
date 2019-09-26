import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import ReactDOM from 'react-dom';
import config from '../assets/config';
import Input from './Input';

test('renders without props', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame config={createConfig(config)}>
      <Input />
    </AppFrame>,
    div,
  );
});
