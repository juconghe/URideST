const React = require('react');
class ListGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.items;
    return (
      <div>
          {items.map((i)=>
              <button className="btn btn-raised btn-default btn-block" key={i}>
                <span>{i[1]}</span>
                <br/>
                <span href="#">{i[2]}</span>
              </button>
          )}
      </div>
    );
  }
}

module.exports = ListGroup;
