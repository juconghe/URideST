import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
import '../../css/App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
    width: '200px',
  },
});

class SelectionButtons extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid 
            container
            spacing={16}
            className='centered'
            alignItems="center"
            direction="column"
            justify="space-evenly"
          >
            <Grid item>
              <Button variant="contained" className={classes.button} component={Link} to='/pickupdate'>
                Request A Ride
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.button}>
                View Rides
              </Button>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

SelectionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(SelectionButtons);
