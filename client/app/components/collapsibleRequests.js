const React = require('react');
import Collapsible from 'react-collapsible';
import ListGroupWithOnClick from './listGroupWithOnClick';
import {getAvailableVan} from '../server';

class CollapsibleRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableVans:[],
      selectedRequest:0,
    }
  }
  componentDidMount() {
    getAvailableVan((vans)=> {
      this.setState({availableVans:vans});
    });
  }

  handleselecteRequest(e,request) {
    // this.setState({selectedRequest:request});
    console.log(request);
  }

  render() {
    const items = this.props.items;
    const vans = this.state.availableVans.map(function(van) {
      return [van._id,"Van "+van.number];
    });
    return (
      <div>
          {items.map((i)=>
              <Collapsible trigger={
                <a type="button" className="btn btn-raised btn-default btn-block">
                <span>{i.user.firstname} {i.user.lastname} </span>
                <br/>
                <span>{i.pickupDate}</span>
                <br/>
                <span>{i.pickupTime}</span>
                <br/>
                <span>{i.pickup} -> {i.dropoff}</span>
              </a>} key={i._id}>
              <ListGroupWithOnClick items={vans} refresh={this.props.refresh} request={i}/>
              </Collapsible>
          )}
      </div>
    );
  }
}

module.exports = CollapsibleRequests;
