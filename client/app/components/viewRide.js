const React = require('react');
const ReactDOM = require('react-dom');
import Navbar from './navbar';
import RideTable from './rideTable';

export default class ViewRide extends React.Component {
  render() {
    return (
      <div>
      <RideTable />
      <RideTable />
      <RideTable />
      </div>
  );
  }
}
