import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import units from '../../assets/units';
import beautifyPhoneNumber from '../../utils/beautifyPhoneNumber';
import createRawHtml from './createRawHtml';

class App extends React.Component {
  formatData = () => {
    const { phone: rawPhone, position, unitId } = this.props;
    const phone = rawPhone.replace(/\D/g, '');
    return createRawHtml({
      ...this.props,
      phone: phone !== '' ? ` | Direct: ${beautifyPhoneNumber(phone)}` : '',
      unit: units[unitId],
      position,
    });
  };

  handleCopy = () => {
    const copyText = document.createElement('textarea');
    copyText.style = { position: 'absolute', left: '999999px' };
    document.body.appendChild(copyText);
    copyText.value = this.formatData();
    copyText.select();
    document.execCommand('copy');
    document.body.removeChild(copyText);
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleCopy}>Copy raw HTML</Button>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  phone: PropTypes.string,
  position: PropTypes.string,
  unitId: PropTypes.string,
};

App.defaultProps = {
  unitId: 'ricro',
  phone: '',
  position: '',
};

const mapStateToProps = state => ({ ...state.App });
export default connect(mapStateToProps)(App);
