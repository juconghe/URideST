import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import '../../css/App.css';

const styles = theme => ({
	screenCenter: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginTop: theme.spacing.unit * 50,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
		  width: 400,
		  marginLeft: 'auto',
		  marginRight: 'auto',
		},
		card: {
			minWidth: 275,
		},
		centerButton: {
			padding: '50%',
		}
	  },
});

class Submitpage extends Component {
  render() {
	const { classes } = this.props;
	return (
		<Card className="centered">
			<CardContent>
				<Typography variant="h5" component="h2" gutterBottom>
				Thank you!
				</Typography>
				<Typography component="p">
					Your ride has been requested. It is currently pending. 
					The dispatcher will review your request as soon as possible
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="Large" fullWidth component={Link} to='/'>View Your Ride</Button>
			</CardActions>
		</Card>
	);
  }
}

Submitpage.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Submitpage);
