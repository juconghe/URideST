const React = require('react');
class ListGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items;
    return (
      <ul className="list-group">
          {items.map((i)=>
            <li className="list-group-item" key={i[0]}>
                <a href="#">{i[1]}</a>
                <a className="pull-right" href="#">{i[2]}</a>
            </li>
          )}
      </ul>
    );
  }
}

module.exports = ListGroup;
