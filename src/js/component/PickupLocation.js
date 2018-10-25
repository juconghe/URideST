import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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
	formControl: {
	  margin: theme.spacing.unit,
	  minWidth: 400,
	},
	paper: {
		marginBottom: theme.spacing.unit * 2,
		padding: theme.spacing.unit * 2,
		height: '100%',
		color: theme.palette.text.secondary,
	  },
  });

class PickupLocation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: ""
		}
		this.handleLocationChange = this.handleLocationChange.bind(this);
	}

	handleLocationChange(e) {
		console.log(e.target.value);
		this.setState({ [e.target.name]: e.target.value });
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
					className={classes.screenCenter}
				>
					<Grid item>
						<Paper className={classes.paper}>Select a Pickup Location</Paper> 
					</Grid>
					<Grid>
						<form autoComplete="off">
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor="age-simple">Location</InputLabel>
								<Select
									value={this.state.location} // state
									onChange={this.handleLocationChange} // change function
 									inputProps={{
										name: 'location',
										id: 'age-simple',
									}}
								>
									<MenuItem value="">
									<em>None</em>
									</MenuItem>
									<MenuItem value={"LGRC"}>LGRC</MenuItem>
									<MenuItem value={"Fine Art Center"}>Fine Art Center</MenuItem>
									<MenuItem value={"Integrated Learning Center"}>Integrated Learning Center</MenuItem>
								</Select>
							</FormControl>
						</form>
					</Grid>
					<Grid>
					<TextField
						id="standard-full-width"
						label="Custom Location"
						style={{ margin: 8 }}
						placeholder="Your Custom Address"
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					</Grid>
				</Grid>
        	</Grid>
      	</Grid>
	)
  }
}

PickupLocation.propTypes = {
	classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(PickupLocation);