const React = require('react');
const ListGoup = require('./listGroup');
const CollapsibleRequests = require('./collapsibleRequests');
import {getAllPendingRideData} from '../server';

const passengerData = [[0, "Dennis Reynolds", "12345534"],
             [1, "Deandra Reynolds", "3466221"],
             [2, "Charlie Kelly", "3852395"],
             [3, "Ronald McDonald", "4235634"],
             [4, "Donald Trump", "6666666"]];
const requestData = [{
    "_id":"000000000000000000000001",
    "pickupTime":"11:00 AM - 11:15 AM",
    "pickupDate":1492544152941,
    "isConfirmed":true,
    "dropoff":"LGRC",
    "pickup":"FAC",
    "van":-1,
    "user":{
      "lastname":"He",
      "firstname":"Jucong"
    }
  }]

class RequestPassengerBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      passengers:passengerData,
      requests:requestData,
      passengerView: false
    }
    this.handleSwitchTab = this.handleSwitchTab.bind(this);
  }

  componentDidMount() {
    getAllPendingRideData((pendingRides)=> {
      console.log(pendingRides);
      this.setState({requests:pendingRides});
    })
  }

  handleSwitchTab() {
    this.setState(prevState => ({
      passengerView:!prevState.passengerView
    }));
  }

  render(){
    let passengers = this.state.passengers;
    let passengerView = this.state.passengerView;
    let requests = this.state.requests;
    let list = null;
    if(passengerView){
      list = <ListGoup items={passengers}/>
    }
    else {
      list = <CollapsibleRequests items={requests} />
    }
    return(

          <div className="col-md-3 nopadding">
            <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="btn-group btn-group-justified" role="group">
                    <a type="button"
                      className={!passengerView ? "btn btn-raised btn-default active" :"btn btn-raised btn-default"}
                      onClick={passengerView ? this.handleSwitchTab:null}>
                      REQUESTs
                    </a>
                    <a type="button"
                      className={passengerView ? "btn btn-raised btn-default active" :"btn btn-raised btn-default"}
                      onClick={!passengerView ? this.handleSwitchTab:null}>
                      PASSENGERS
                    </a>
                  </div>
                </div>
                <div className="panel-body">
                  {list}
                </div>
            </div>
          </div>

    );
  }
}
module.exports = RequestPassengerBox;
