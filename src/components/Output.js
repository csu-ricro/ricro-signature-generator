import Paper from '@material-ui//core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import units from '../assets/units';

const style = {
  text: {
    fontFamily: "'Helvetica',sans-serif",
    color: '#59595B',
    padding: '0 0 0 1.65em',
    fontSize: '.85em',
  },
};

const beautifyPhoneNumber = number => {
  if (number) {
    number = number.toString();
    if (number.length > 10) {
      return `${number[0]} (${number.substring(1, 4)}) ${number.substring(4, 7)}-${number.substring(
        7,
        11,
      )}`;
    }
    if (number.length > 7) {
      return `(${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(6, 10)}`;
    }
    return `${number.substring(0, 3)}-${number.substring(3, 7)}`;
  }
  number = 0;
};
const unitsBaseUrl = 'https://services.ricro.colostate.edu/_external/signatures/';

const OutputForm = props => {
  const { name, title, unitId, phone, position } = props;
  let phoneFormatted = phone.toString().replace(/\D/g, '');
  phoneFormatted =
    phoneFormatted !== '' ? ` | Direct: ${beautifyPhoneNumber(phoneFormatted)}` : null;
  const unit = units[unitId];

  return (
    <Paper>
      <br />
      <p style={style.text}>
        {name}
        {title !== '' ? `, ${title}` : null}
      </p>
      <p style={style.text}>
        {position.split('\n').map((p, i) => {
          return (
            <span key={p}>
              {i > 0 ? <br /> : null}
              {p}
            </span>
          );
        })}
        <br />
        <strong>{unit.name}</strong>
      </p>
      <p style={style.text}>
        {unit.campusDelivery} Campus Delivery | Fort Collins, CO 80523-{unit.campusDelivery}
        <br />
        {unit.physicalAddress} | Colorado State University
        <br />
        Office: {unit.officePhone !== '' ? `${beautifyPhoneNumber(unit.officePhone)}` : null}
        {phoneFormatted}
      </p>
      <a href={unit.website}>
        <img src={unitsBaseUrl + unit.imgUrl} alt={unit.name} />
      </a>
    </Paper>
  );
};

OutputForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  position: PropTypes.string,
  title: PropTypes.string,
  unitId: PropTypes.string,
};

OutputForm.defaultProps = {
  name: '',
  phone: '',
  position: '',
  title: '',
  unitId: 'ricro',
};

const mapStateToProps = state => ({ ...state.App });

export default connect(mapStateToProps)(OutputForm);
