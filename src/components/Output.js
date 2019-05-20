/* eslint-disable max-lines-per-function */
/* eslint-disable linebreak-style */
import React from 'react';
import Paper from '@material-ui//core/Paper';
import units from '../assets/units';
import _ from 'lodash';
import {
  connect,
} from 'react-redux';

const style = {
    text: {
      fontFamily: '\'Helvetica\',sans-serif',
      color: '#59595B',
      padding: '0 0 0 1.65em',
      fontSize: '.85em',
    },
  };

const beautifyPhoneNumber = (number) => {
   if (number) {
 number =
    number.toString();
  if (number.length > 10) {
    return `${number[0]} (${number.substring(1, 4)}) ${
      number.substring(4, 7)}-${number.substring(7, 11)}`;
  } if (number.length > 7) {
    return `(${number.substring(0, 3)}) ${
      number.substring(3, 6)}-${number.substring(6, 10)}`;
  }
  return `${number.substring(0, 3)}-${number.substring(3, 7)}`;
} number = 0; 
};
const unitsBaseUrl = 'https://services.ricro.colostate.edu/_external/signatures/';

const OutputForm = (props) => {
  const { name, title } = props;
  const position = _.get(props, 'position', '').split('\n');
  let phone = _.get(props, 'phone', '').toString().replace(/\D/g, '');
  phone = phone !== '' ? ` | Direct: ${beautifyPhoneNumber(phone)}` : null;
  const unit = units[props.unitId];

  return (
    <Paper
      zDepth={3}>
      <br />
      <p style={style.text}>
        {name}
        {title !== '' ? `, ${title}` : null}
      </p>
      <p style={style.text}>
         {position.map((p, i) => {
           return <span key={p}>{i > 0 ? <br /> : null}{p}</span>;
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
         {phone}
      </p>
      <a href={unit.website}>
        <img

          src={unitsBaseUrl + unit.imgUrl}
          alt={unit.name} />
      </a>
    </Paper>
  );
};
OutputForm.defaultProps = { unitId: 'ricro', name: '', title: '' };
const mapStateToProps = (state) => {
  return {
    ...state.App,
  };
};


export default connect(
  mapStateToProps,
)(OutputForm);
