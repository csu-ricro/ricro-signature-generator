import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import units from '../../assets/units';
import beautifyPhoneNumber from '../../utils/beautifyPhoneNumber';
import createRawHtml from './createRawHtml';

const styles = () => ({
  html: {
    position: 'absolute',
    // maxHeight: 0,
    // maxWidth: 0,
    // overflow: 'hidden',
  },
});

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
    document.querySelector('#copy-html').select();
    document.execCommand('copy');
  };

  render() {
    const { classes } = this.props;
    const rawHtml = this.formatData();
    return (
      <React.Fragment>
        <Button onClick={this.handleCopy}>Copy raw HTML</Button>
        <TextField
          id="copy-html"
          label="Multiline"
          multiline
          value={rawHtml}
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  phone: PropTypes.string,
  position: PropTypes.string,
  title: PropTypes.string,
  unitId: PropTypes.string,
};

App.defaultProps = {
  unitId: 'ricro',
  name: '',
  phone: '',
  position: '',
  title: '',
};

const mapStateToProps = state => ({ ...state.App });
export default connect(mapStateToProps)(withStyles(styles)(App));
