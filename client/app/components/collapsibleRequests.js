const React = require('react');
import Collapsible from 'react-collapsible';
import ListGroup from './listGroup';
const vans=[[0, "Van 1"],
            [1, "Van 2"],
            [2, "Van 3"],
            [3, "Van 4"],
            [4, "Van 5"]]

class CollapsibleRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items;
    let listVan = <ListGroup items={vans}/>
    return (
      <div>
          {items.map((i)=>
              <Collapsible trigger = {<button className="btn btn-raised btn-default btn-block" key={i}>
                <span>{i[1]}</span>
                <br/>
                <span href="#">{i[2]}</span>
              </button>} >
              {listVan}
              </Collapsible>
          )}
      </div>
    );
  }
}

module.exports = CollapsibleRequests;
