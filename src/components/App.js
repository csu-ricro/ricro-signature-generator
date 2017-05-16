import React, {
  Component
} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {
  Toolbar,
  ToolbarTitle,
  ToolbarGroup
} from 'material-ui/Toolbar';

import CsuSvgLogo from './CsuBranding';
import InputForm from '../containers/InputForm';
import OutputSignature from '../containers/OutputSignature';

import config from '../config.json';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

document.title = document.title === '' ? config.appName + ' - ' + config.unitTitle : document.title;

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          iconElementLeft={<CsuSvgLogo />} />
        <Toolbar>
          <ToolbarTitle text={config.appName} />
          <ToolbarGroup>
            <IconButton
              href='/'
              tooltip='Home'
              iconClassName='fa fa-home' />
          </ToolbarGroup>
        </Toolbar>
        <div id="main-content">
          <div className='row'>
            <div className='col-md-7'>
              <InputForm />
            </div>
            <div className='col-md-5'>
              <OutputSignature />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
