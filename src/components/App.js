import React, {
  Component
} from 'react';
import AppContainer from '../csu-app-template/AppContainer';
import InputForm from '../containers/InputForm';
import OutputSignature from '../containers/OutputSignature';

import config from '../config.json';

class App extends Component {
  render() {
    return (
      <AppContainer config={config}>
          <div className='row'>
            <div className='col-md-7'>
              <InputForm />
            </div>
            <div className='col-md-5'>
              <OutputSignature />
            </div>
          </div>
      </AppContainer>
    );
  }
}
export default App;
