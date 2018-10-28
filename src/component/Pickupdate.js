import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import  {setPages, setPickupDate, setButtonDisable} from '../actions'
import { connect } from 'react-redux';

import '../css/App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
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

const mapDispatchToProps = dispatch => ({
  setPages: (back, next) => dispatch(setPages(back, next)),
  setPickupDate: (date) => dispatch(setPickupDate(date)),
  setButtonDisable: (isDisable) => dispatch(setButtonDisable(isDisable))
})

class Pickupdate extends Component {

  constructor(props) {
    super(props);
    this.handlePickdateOnChange = this.handlePickdateOnChange.bind(this);
  }
  componentDidMount() {
    this.props.setPages('', 'pickuplocation')
    this.props.setButtonDisable(true)
  }

  handlePickdateOnChange(e) {
    this.props.setPickupDate(e.target.value)
    this.props.setButtonDisable(false)
  }

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
              className="centered"
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
                  className={classes.textField}
                  onChange={this.handlePickdateOnChange}
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

export default withStyles(styles)(connect(null, mapDispatchToProps)(Pickupdate));
