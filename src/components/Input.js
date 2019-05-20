/* eslint-disable react/prop-types */
/* eslint-disable max-lines-per-function */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-this-in-sfc */
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName, updatePhone, updatePosition, updateTitle, updateUnitId } from '../actions/app';
import FormControl from '@material-ui/core/FormControl';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  formControl: {
    width: '80%',
    minWidth: '200px',
    marginBottom: 20,
  },

});
const units = [
  {
    value: 'ricro',
    label: 'Research Integrity & Compliance Review Office',
  },
];

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitIdentifier: 'ricro',
    };
  }

  handleNameChange = (event) => {
    this.props.handleUpdateName(event.target.value);
  };

  handleTitleChange = (event) => {
    this.props.handleUpdateTitle(event.target.value);
  };

  handleUnitIdChange = (event, index, unitId) => {
    this.props.handleUpdateUnitId(event.target.value);
  };

  handlePositionChange = (event, position) => {
    this.props.handleUpdatePosition(event.target.value);
  };

  handlePhoneChange = (event, phone) => {
    this.props.handleUpdatePhone(event.target.value);
  };


  render() {
    const { classes } = this.props;
    return (
      <section>
        <div className={classes.formControl}>
          <div className="col-md-6">
            <TextField
              variant="outlined"
              value={this.props.name}
              onChange={this.handleNameChange}
              fullWidth
label="Name" />
          </div>
        </div>
          <div className={classes.formControl}>

          <div className="col-md-6">
            <TextField
            value={this.props.title}
            onChange={this.handleTitleChange}
            fullWidth
            hintText="MS, PhD, CIP, etc."
            label="Title"
            variant="outlined"
            />
          </div>
          </div>
        <div className="row">
          <div className="col-md-6">
            <FormControl className={classes.formControl}>

              <TextField
                select
                variant="outlined"
                fullWidth
                label="Unit Identifier"
                value={this.props.unitId}
                onChange={this.handleUnitIdChange}
                >
              <MenuItem value="empty">Test empty</MenuItem>
              <MenuItem value="ricro">Research Integrity & Compliance Review Office</MenuItem>
              </TextField>
            </FormControl>


          </div>
          <div className={classes.formControl}>
            <TextField
              variant="outlined"
              onChange={this.handlePositionChange}
              fullWidth
              helperText='Use " | " to distinguish between positions'
              label="Position(s)"
              multiLine
              rows={1}
              />
          </div>
        </div>
        <div className={classes.formControl}>
          <div className="col-md-6">
            <TextField
              variant="outlined"
              onChange={this.handlePhoneChange}
              fullWidth
              label="Direct Phone"
              multiLine
              rows={1}
              />
          </div>
        </div>
      </section>
    );
  }
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
  return {
    ...state.App,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUpdateName: name => {
      console.log('dispatch', name);
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
Input.defaultProps = { unitId: 'ricro', name: '', title: '' };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Input));
