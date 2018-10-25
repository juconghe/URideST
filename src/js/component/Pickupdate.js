import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  paper: {
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
  },
});

class Pickupdate extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
            <Grid 
                container
                spacing={8}
                alignItems="center"
                direction="column"
                justify="center"
                className={classes.screenCenter}
            >
               <Grid item>
                <Paper className={classes.paper}>Select a Date</Paper> 
               </Grid>
               <Grid>
               <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    type="date"
                    fullWidth
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                </form>
               </Grid>
            </Grid>
        </Grid>
      </Grid>
    )
  }
}

Pickupdate.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Pickupdate);
