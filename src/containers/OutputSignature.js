import {
  connect
} from 'react-redux';
import * as OutputSignatureComponent from '../components/OutputSignature';

const mapStateToProps = (state) => {
  return {
    ...state.App
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const OutputSignature = connect(
  mapStateToProps,
  mapDispatchToProps
)(OutputSignatureComponent.default);

export default OutputSignature;
