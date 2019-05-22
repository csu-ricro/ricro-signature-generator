import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { updateName, updatePhone, updatePosition, updateTitle, updateUnitId } from '../actions/app';

class Input extends React.Component {
  handleNameChange = event => {
    this.props.handleUpdateName(event.target.value);
  };

  handleTitleChange = event => {
    this.props.handleUpdateTitle(event.target.value);
  };

  handleUnitIdChange = event => {
    this.props.handleUpdateUnitId(event.target.value);
  };

  handlePositionChange = event => {
    this.props.handleUpdatePosition(event.target.value);
  };

  handlePhoneChange = event => {
    this.props.handleUpdatePhone(event.target.value);
  };

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { name, title, unitId } = this.props;
    return (
      <React.Fragment>
        <TextField
          variant="outlined"
          value={name}
          onChange={this.handleNameChange}
          fullWidth
          label="Name"
        />
        <TextField
          margin="normal"
          value={title}
          onChange={this.handleTitleChange}
          fullWidth
          placeholder="MS, PhD, CIP, etc."
          label="Title"
          variant="outlined"
        />
        <TextField
          margin="normal"
          select
          variant="outlined"
          fullWidth
          label="Unit Identifier"
          value={unitId}
          onChange={this.handleUnitIdChange}
        >
          <MenuItem value="ricro">Research Integrity & Compliance Review Office</MenuItem>
        </TextField>
        <TextField
          margin="normal"
          variant="outlined"
          onChange={this.handlePositionChange}
          fullWidth
          helperText="Each line is a different positions"
          label="Position(s)"
          multiline
          rows={3}
        />
        <TextField
          margin="normal"
          variant="outlined"
          onChange={this.handlePhoneChange}
          fullWidth
          label="Direct Phone"
          inputProps={{ maxLength: 11 }}
        />
      </React.Fragment>
    );
  }
}

Input.propTypes = {
  handleUpdateName: PropTypes.func.isRequired,
  handleUpdatePhone: PropTypes.func.isRequired,
  handleUpdatePosition: PropTypes.func.isRequired,
  handleUpdateTitle: PropTypes.func.isRequired,
  handleUpdateUnitId: PropTypes.func.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  unitId: PropTypes.string,
};

Input.defaultProps = {
  unitId: 'ricro',
  name: '',
  title: '',
};

const mapStateToProps = state => {
  return {
    ...state.App,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUpdateName: name => {
      dispatch(updateName(name));
    },
    handleUpdateTitle: title => {
      dispatch(updateTitle(title));
    },
    handleUpdateUnitId: unitId => {
      dispatch(updateUnitId(unitId));
    },
    handleUpdatePosition: position => {
      dispatch(updatePosition(position));
    },
    handleUpdatePhone: phone => {
      dispatch(updatePhone(phone));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
