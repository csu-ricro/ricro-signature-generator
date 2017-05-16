import React from 'react';
import Paper from 'material-ui/Paper';

import config from '../config.json';

const beautifyPhoneNumber = (number) => {
  number = number.toString().replace(/\D/g, '');
  if (number.length > 10) {
    return number[0] + ' (' + number.substring(1, 4) + ') ' +
      number.substring(4, 7) + '-' + number.substring(7, 11);
  } else if (number.length > 7) {
    return '(' + number.substring(0, 3) + ') ' +
      number.substring(3, 6) + '-' + number.substring(6, 10);
  }
  return number.substring(0, 3) + '-' + number.substring(3, 7)
}

const InputForm = (props) => {
  let unit, name, title, position, phone;
  if (Object.keys(props).length === 0) {
    unit = config.units.ricro;
    name = '';
    title = '';
    position = [];
    phone = '';
  } else {
    unit = config.units[props.unitId];
    name = props.name;
    title = props.title;
    position = props.position.split('\n');
    phone = props.phone;
  }
  const style = {
    text: {
      fontFamily: '\'Helvetica\',sans-serif',
      color: '#59595B',
      padding: '0 0 0 1.65em',
      fontSize: '.85em'
    },
    img: {
      height: config.img.height + 'px',
      width: config.img.width + 'px'
    }
  }
  return (
    <Paper
      zDepth={3} >
      <br/>
      <p style={style.text}>
        {name}
        {title !== '' ? ', ' + title : null}
      </p>
      <p style={style.text}>
         {position.map((position, i)=>{
           return <span key={i}>{i > 0 ? <br/> : null}{position}</span>;
         })}
         <br/>
         <strong>{unit.name}</strong>
      </p>
      <p style={style.text}>
         {unit.campusDelivery} Campus Delivery | Fort Collins, CO 80523-{unit.campusDelivery}
         <br/>
         {unit.physicalAddress} | Colorado State University
         <br/>
         Office: {beautifyPhoneNumber(unit.officePhone)}
         {phone !== '' ? ' | Direct: '+beautifyPhoneNumber(phone) : null}
      </p>
      <a href={unit.website}>
        <img
          style={style.img}
          width={config.img.width}
          height={config.img.height}
          src={config.unitsBaseUrl+unit.imgUrl}
          alt={unit.name} />
      </a>
    </Paper>
  );
}

export default InputForm;
