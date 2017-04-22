const React = require('react');
import Collapsible from 'react-collapsible';
import ListGroup from './listGroup';
import {getAvailableVan} from '../server';

class CollapsibleRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableVans:[]
    }
  }
  componentDidMount() {
    getAvailableVan((vans)=> {
      this.setState({availableVans:vans});
    });
  }
  render() {
    const items = this.props.items;
    const vans = this.state.availableVans.map(function(van) {
      return [van._id,"Van "+van.number];
    });
    let listVan = <ListGroup items={vans}/>
    return (
      <div>
          {items.map((i)=>
              <Collapsible trigger={
                <button className="btn btn-raised btn-default btn-block">
                <span>{i.user.firstname} {i.user.lastname} </span>
                <br/>
                <span>{i.pickupDate}</span>
                <br/>
                <span>{i.pickupTime}</span>
                <br/>
                <span>{i.pickup} -> {i.dropoff}</span>
              </button>} key={i._id}>
              {listVan}
              </Collapsible>
          )}
      </div>
    );
  }
}

module.exports = CollapsibleRequests;
