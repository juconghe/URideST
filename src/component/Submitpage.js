import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import  {setPages} from '../actions'
import { connect } from 'react-redux';
import '../css/App.css';

const mapDispatchToProps = dispatch => ({
	setPages: (back, next) => dispatch(setPages(back, next))
})

class Submitpage extends Component {

	componentDidMount() {
    this.props.setPages('', '')
	}

  render() {
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
				<Button size="large" fullWidth component={Link} to='/'>View Your Ride</Button>
			</CardActions>
		</Card>
	);
  }
}

export default connect(null, mapDispatchToProps)(Submitpage);
