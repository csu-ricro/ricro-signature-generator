import React, {
  Component
} from 'react';
import $ from 'jquery';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {
  Toolbar,
  ToolbarTitle,
  ToolbarGroup,
  ToolbarSeparator
} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';

import CsuSvgLogo, {
  CsuFooter
} from './CsuBranding';
import InputForm from '../containers/InputForm';
import OutputSignature from '../containers/OutputSignature';

import config from '../config.json';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

document.title = document.title === '' ? config.appName + ' - ' + config.unitTitle : document.title;

class App extends Component {
  componentDidMount() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $('#logobar').addClass('display-none');
        $('#top-toolbar').addClass('sticky');
      } else {
        $('#logobar').removeClass('display-none');
        $('#top-toolbar').removeClass('sticky');
      }
    });
  }
  render() {
    return (
      <div>
        <AppBar
          id='logobar'
          iconElementLeft={<CsuSvgLogo />} />
        <Toolbar id='top-toolbar'>
          <ToolbarTitle text={config.appName} />
          <ToolbarGroup>
            <IconButton
              href='/'
              tooltip='Home'>
              <FontIcon className='material-icons'>home</FontIcon>
            </IconButton>
            <ToolbarSeparator style={{marginLeft:0}} />
            <IconButton
              href={config.unitContact}
              tooltip='Contact Us'
              tooltipPosition='bottom-left'>
              <FontIcon className='material-icons'>email</FontIcon>
            </IconButton>
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
        <CsuFooter/>
      </div>
    );
  }
}
export default App;
