const React = require('react');
const RideTable = require('./rideTable');
import {getPreviousRideData} from '../server';
import {getPendingRideData} from '../server';
import {getConfirmedRideData} from '../server';

class ViewRide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previosRideArray:[{
        _id:null,
        pickupTime:null,
        pickupDate:null,
        isConfirmed:null,
        dropoff:null,
        pickup:null,
        van:null,
        user:null
      }]
      pendingRideArray:[{
        _id:null,
        pickupTime:null,
        pickupDate:null,
        isConfirmed:null,
        dropoff:null,
        pickup:null,
        van:null,
        user:null
      }]
      confirmedRideArray:[{
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
    getPendingRideData(1,(data)=> {
      console.log(data);
      this.setState({pendingRideArray:data});
    });
    getConfirmedRideData(1,(data)=> {
      console.log(data);
      this.setState({confirmedRideArray:data});
    });

  }

  render() {
    let rideData = this.state.rideArray;
    return (
      <div>
      <RideTable title="Previous Ride" rideData={previousRideData}/>
      <RideTable title="Pending Ride" rideData={pendingRideData}/>
      <RideTable title="Confirmed Ride" rideData={confirmedRideData}/>
      </div>
  );
  }
}
module.exports = ViewRide;
