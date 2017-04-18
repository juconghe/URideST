const React = require('react');
const ReactDataGrid = require('react-data-grid');

class RideGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rows: this.createRows(30)}
    this.getRandomDate = this.getRandomDate.bind(this);
    this.createRows = this.createRows.bind(this);
    this.rowGetter = this.rowGetter.bind(this);
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);

  }

  getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  }

  createRows(numberOfRows) {
    let rows = [];
    const locations = ['FAC', 'LGRC','ILC','Morill'];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        id: i,
        firstName: 'First Name' + i,
        lastName: 'Last Name' + i,
        date:this.getRandomDate(new Date(2015, 3, 1), new Date()),
        time:"Now",
        pickupLocation:locations[Math.floor((Math.random() * 4))],
        dropoffLocation: ['FAC', 'LGRC','ILC', 'Morill'][Math.floor((Math.random() * 4))],
        van: Math.floor((Math.random() * 20)),
        isApproved:['Approved', 'Pending','Deny'][Math.floor((Math.random() * 3))]
      });
    }
    return rows;
  }

  rowGetter(i) {
    return this.state.rows[i];
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    let rows = this.state.rows;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = React.addons.update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }

    this.setState({ rows });
  }

  render() {
    return  (
      <ReactDataGrid
        enableCellSelect={true}
        columns={[
            {
              key: 'id',
              name: 'ID',
              width: 50
            },
            {
              key: 'firstName',
              name: 'First Name',
              width: 120
            },
            {
              key: 'lastName',
              name: 'Last Name',
              width: 120
            },
            {
              key: 'date',
              name: 'Date',
              width: 100,
              editable: true
            },
            {
              key: 'time',
              name: 'Time',
              width: 80,
              editable: true
            },
            {
              key: 'pickupLocation',
              name: 'Pickup',
              width:100,
              editable: true
            },
            {
              key: 'dropoffLocation',
              name: 'Dropoff',
              width:100,
              editable: true
            },
            {
              key: 'van',
              name: 'Van #',
              width: 50,
              editable: true
            },
            {
              key: 'isApproved',
              name: 'Approved',
              width: 100,
              editable: true
            },
          ]}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}
        minHeight={500}
        onGridRowsUpdated={this.handleGridRowsUpdated} />);
  }
}

module.exports = RideGrid;
