const React = require('react');
const ReactDataGrid = require('react-data-grid');

class RideGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rows: this.createRows(1000)}
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
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        id: i,
        task: 'Task ' + i,
        complete: Math.min(100, Math.round(Math.random() * 110)),
        priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
        startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
        completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
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
              width: 80
            },
            {
              key: 'task',
              name: 'Title',
              editable: true
            },
            {
              key: 'priority',
              name: 'Priority',
              editable: true
            },
            {
              key: 'issueType',
              name: 'Issue Type',
              editable: true
            },
            {
              key: 'complete',
              name: '% Complete',
              editable: true
            },
            {
              key: 'startDate',
              name: 'Start Date',
              editable: true
            },
            {
              key: 'completeDate',
              name: 'Expected Complete',
              editable: true
            }
          ]}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}
        minHeight={500}
        onGridRowsUpdated={this.handleGridRowsUpdated} />);
  }
}

module.exports = RideGrid;
