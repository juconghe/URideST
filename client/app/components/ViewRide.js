const React = require('react');
const ReactDOM = require('react-dom');
import Navbar from './components/navbar';
import RideTable from './components/rideTable'


export default class ViewRide extends React.Component {
  render() {
    return (
      <Navbar />
      <RideTable />
      <RideTable />
    );
  }
}
