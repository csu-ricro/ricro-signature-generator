import React, {
  Component
} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitIdentifier: 'ricro'
    };
  }
  handleNameChange = (event, name) => {
    this.props.handleUpdateName(name);
  }
  handleTitleChange = (event, title) => {
    this.props.handleUpdateTitle(title);
  }
  handleUnitIdChange = (event, index, unitId) => {
    this.props.handleUpdateUnitId(unitId);
  }
  handlePositionChange = (event, position) => {
    this.props.handleUpdatePosition(position);
  }
  handlePhoneChange = (event, phone) => {
    this.props.handleUpdatePhone(phone);
  }
  render() {
    return (
      <section>
        <div className='row'>
          <div className='col-md-6'>
            <TextField
              onChange={this.handleNameChange}
              fullWidth={true}
              floatingLabelText='Name' />
          </div>
          <div className='col-md-6'>
            <TextField
              onChange={this.handleTitleChange}
              fullWidth={true}
              hintText='MS, PhD, CIP, etc.'
              floatingLabelText='Title' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <SelectField
              fullWidth={true}
              floatingLabelText='Unit Identifier'
              value={this.props.unitId}
              onChange={this.handleUnitIdChange} >
              <MenuItem value='ricro' primaryText='Research Integrity & Compliance Review Office' />
            </SelectField>
          </div>
          <div className='col-md-6'>
            <TextField
              onChange={this.handlePositionChange}
              fullWidth={true}
              hintText='Use line breaks to distinguish between positions'
              floatingLabelText='Position(s)'
              multiLine={true}
              rows={1} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <TextField
              onChange={this.handlePhoneChange}
              fullWidth={true}
              floatingLabelText='Direct Phone'
              multiLine={true}
              rows={1} />
          </div>
        </div>
      </section>
    );
  }
}

export default InputForm;
