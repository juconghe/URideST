const React = require('react');
const ReactDataGrid = require('react-data-grid');
import {getAllRideData} from '../server';

class RideGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row:[],
      force:null
    }
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
    this.handleGridSort = this.handleGridSort.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    getAllRideData('confirmedRides',(confirmedRideData)=> {
      this.setState({row:confirmedRideData,force:nextProps.force});
    });
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
  handleGridSort(sortColumn, sortDirection) {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };

    const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

    this.setState({ rows });
  }

  render() {
    const newrows = this.state.row.map(function(req) {
       var row = {
         id:req._id,
         firstName:req.user.firstname,
         lastName:req.user.lastname,
         date:req.pickupDate,
         time:req.pickupTime,
         pickupLocation:req.pickup,
         dropoffLocation:req.dropoff,
         van:req.van,
         isApproved:req.isConfirmed ? 'Yes' : 'No'
       }
       return row;
    });
    return  (
      <ReactDataGrid
        enableCellSelect={true}
        columns={[
            {
              key: 'id',
              name: 'ID',
              sortable: true

            },
            {
              key: 'firstName',
              name: 'First Name',
              resizable: true,
              sortable: true
              // width: 120
            },
            {
              key: 'lastName',
              name: 'Last Name',
              // width: 120
              resizable: true,
              sortable: true
            },
            {
              key: 'date',
              name: 'Date',
              // width: 100,
              editable: true,
              resizable: true,
              sortable: true
            },
            {
              key: 'time',
              name: 'Time',
              // width: 80,
              editable: true,
              resizable: true,
              sortable: true
            },
            {
              key: 'pickupLocation',
              name: 'Pickup',
              // width:100,
              editable: true,
              resizable: true,
              sortable: true
            },
            {
              key: 'dropoffLocation',
              name: 'Dropoff',
              // width:100,
              editable: true,
              resizable: true,
              sortable: true
            },
            {
              key: 'van',
              name: 'Van #',
              width: 50,
              editable: true,
              sortable: true
            },
            {
              key: 'isApproved',
              name: 'Approved',
              // width: 100,
              editable: true,
              resizable: true,
              sortable: true
            },
          ]}
        rowGetter={(i)=>newrows[i]}
        onGridSort={this.handleGridSort}
        rowsCount={newrows.length}
        minHeight={500}
        onGridRowsUpdated={this.handleGridRowsUpdated} />);
  }
}

module.exports = RideGrid;
