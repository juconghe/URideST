const React = require('react');
const ListGoup = require('./listGroup');
const CollapsibleRequests = require('./collapsibleRequests');
import {getAllPendingRideData} from '../server';

const passengerData = [[0, "Dennis Reynolds", "12345534"],
             [1, "Deandra Reynolds", "3466221"],
             [2, "Charlie Kelly", "3852395"],
             [3, "Ronald McDonald", "4235634"],
             [4, "Donald Trump", "6666666"]];

class RequestPassengerBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      passengers:passengerData,
      requests:[],
      passengerView: false
    }
    this.handleSwitchTab = this.handleSwitchTab.bind(this);
  }

  componentDidMount() {
    getAllPendingRideData((pendingRides)=> {
      // console.log(pendingRides);
      this.setState({requests:pendingRides});
    });
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
    let vans = this.state.availableVans;
    let list = null;
    if(passengerView){
      list = <ListGoup items={passengers}/>
    }
    else {
      list = <CollapsibleRequests items={requests} vans={vans}/>
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
