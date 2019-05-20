/* eslint-disable linebreak-style */
import React from 'react';
import Input from '../components/Input';
import Output from '../components/Output';
import withStyles from '@material-ui/core/styles/withStyles';
import OutputHTML from '../components/OutputHTML';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  input: {
    
    width: '60%',
    minWidth: '200px',
  },
  output: {
    
    minWidth: 500,
    maxWidth: 1000,
    
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  }
});


class App extends React.Component {
  state = {};
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.row}>
        <div className={classes.input}>
          <Input />
        </div>
        <div className={classes.output}>
          <Output />
          <OutputHTML/>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(App);
