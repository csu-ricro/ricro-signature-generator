import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import React from 'react';
import Input from '../components/Input';
import Output from '../components/Output';
import OutputHTML from '../components/OutputHtml';

const styles = theme => ({
  gridItem: { padding: `0 ${theme.spacing.unit * 2}px` },
});

const IndexPage = ({ classes }) => (
  <Grid container>
    <Grid className={classes.gridItem} item xs={12} md={6}>
      <Input />
    </Grid>
    <Grid className={classes.gridItem} item xs={12} md={6}>
      <Output />
    <OutputHTML />
    </Grid>
  </Grid>
);

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
};

export default withStyles(styles)(IndexPage);
