const React = require('react');
const RideTable = require('./rideTable');
class ViewRide extends React.Component {
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
module.exports = ViewRide;
