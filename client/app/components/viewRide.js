const React = require('react');
const RideTable = require('./rideTable');
import {getPreviousRideData} from '../server';
import {getConfirmedRideData} from '../server';
import {getPendingRideData} from '../server';

class ViewRide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rideArray:[{
      _id:null,
      pickupTime:null,
      pickupDate:null,
      isConfirmed:null,
      dropoff:null,
      pickup:null,
      van:null,
      user:null
      }]
    }
  }
  componentWillMount() {
    getPreviousRideData(1,(data)=> {
      console.log(data);
      this.setState({rideArray:data});
    });
  }

  render() {
    let rideData = this.state.rideArray;
    return (
      <div>
      <RideTable title="Previous Ride" rideData={rideData}/>
      <RideTable title="Pending Ride" rideData={rideData}/>
      <RideTable title="Confirmed Ride" rideData={rideData}/>
      </div>
  );
  }
}
module.exports = ViewRide;
