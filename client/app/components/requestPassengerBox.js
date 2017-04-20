const React = require('react');
const ListGoup = require('./listGroup');
const CollapsibleRequests = require('./collapsibleRequests');
const passengerData = [[0, "Dennis Reynolds", "12345534"],
             [1, "Deandra Reynolds", "3466221"],
             [2, "Charlie Kelly", "3852395"],
             [3, "Ronald McDonald", "4235634"],
             [4, "Donald Trump", "6666666"]];
const requestData = [[0, "Wednesday March 1", "Berk -> FAC"],
           [1, "Monday March 10", "Arnold House -> ILC"],
           [2, "Friday March 15", "LGRC -> Hamp"],
           [3, "Tuesday March 11", "ISB -> Frank"],
           [4, "Thursday March 12", "Campus Center -> Brown"]];
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
