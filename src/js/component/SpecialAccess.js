import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
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
	paper: {
		marginBottom: theme.spacing.unit * 2,
		padding: theme.spacing.unit * 2,
		height: '100%',
		color: theme.palette.text.secondary,
	  },
  });

 class SpecialAccess extends Component {
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
							<Paper className={classes.paper}>Enter your special need message</Paper> 
						</Grid>
						<Grid>
							<TextField
								id="standard-multiline-flexible"
								label="Special Need Message"
								style={{ margin: 8 }}
								placeholder="Your Message"
								fullWidth
								multiline
								rowsMax="5"
								margin="normal"
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		)
	  }
}

SpecialAccess.propTypes = {
	classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(SpecialAccess);