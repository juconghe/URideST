const React = require('react');
const RideTable = require('./rideTable');
import {getPreviousRideData} from '../server';
import {getConfirmedRideData} from '../server';
import {getPendingRideData} from '../server';

class ViewRide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousRideArray:[{
      _id:null,
      pickupTime:null,
      pickupDate:null,
      isConfirmed:null,
      dropoff:null,
      pickup:null,
      van:null,
      user:null
    }],
    ConfirmedRideArray:[{
      _id:null,
      pickupTime:null,
      pickupDate:null,
      isConfirmed:null,
      dropoff:null,
      pickup:null,
      van:null,
      user:null
    }],
    PendingRideArray:[{
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
      this.setState({previousRideArray:data});
    });
    getConfirmedRideData(1,(data)=> {
      console.log(data);
      this.setState({ConfirmedRideArray:data});
    });
    getPendingRideData(1,(data)=> {
      console.log(data);
      this.setState({pendingRideArray:data});
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
