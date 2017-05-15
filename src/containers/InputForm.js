import {
  connect
} from 'react-redux';
import {
  updateName,
  updateTitle,
  updateUnitId,
  updatePosition,
  updatePhone
} from '../actions/app';
import * as InputFormComponent from '../components/InputForm';

const mapStateToProps = (state) => {
  return {
    ...state.App
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateName: (name) => {
      dispatch(updateName(name));
    },
    handleUpdateTitle: (title) => {
      dispatch(updateTitle(title));
    },
    handleUpdateUnitId: (unitId) => {
      dispatch(updateUnitId(unitId));
    },
    handleUpdatePosition: (position) => {
      dispatch(updatePosition(position));
    },
    handleUpdatePhone: (phone) => {
      dispatch(updatePhone(phone));
    },

  }
};

const InputForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormComponent.default);

export default InputForm;
