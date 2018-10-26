import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Footer from './Footer';
import '../../css/App.css';

const styles = theme => ({
	root: {
		flexGrow: 1,
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
			<div>
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
				<Footer next='submit' back='pickuplocation' />
			</div>
		)
	  }
}

SpecialAccess.propTypes = {
	classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(SpecialAccess);