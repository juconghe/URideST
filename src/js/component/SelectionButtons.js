import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  screenCenter: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 50,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
            className={classes.screenCenter}
            alignItems="center"
            direction="column"
            justify="space-evenly"
          >
            <Grid item>
              <Button variant="contained" className={classes.button}>
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
