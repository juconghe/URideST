const React = require('react');
const ListGoup = require('./listGroup');

class RequestPassengerBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      passengers: [[0, "Dennis Reynolds", "12345534"],
                   [1, "Deandra Reynolds", "3466221"],
                   [2, "Charlie Kelly", "3852395"],
                   [3, "Ronald McDonald", "4235634"],
                   [4, "Donald Trump", "6666666"]],
      requests: [[0, "Wednesday March 1", "Berk -> FAC"],
                 [1, "Monday March 10", "Arnold House -> ILC"],
                 [2, "Friday March 15", "LGRC -> Hamp"],
                 [3, "Tuesday March 11", "ISB -> Frank"],
                 [4, "Thursday March 12", "Campus Center -> Brown"]],
     passengerView: true,
     requestView: false
    }
    this.handleSwitchTab = this.handleSwitchTab.bind(this);
  }

  handleSwitchTab(tab) {
    this.setState({
      passengers: tab.passengers,
      requests: tab.requests,
      passengerView: tab.passengerView,
      requestView: tab.requestView
    });
  }

  handlePassengerClick(event){
    event.preventDefault();
    this.setState({
      passengerView: true,
      requestView: false
    });
  }

  handleRequestClick(event){
    event.preventDefault();
    this.setState({
      requestView: true,
      passengerView: false
    });
  }


  render(){
    let passengers = this.state.passengers;
    let passengerView = this.state.passengerView;
    let requestView = this.state.requestView;
    let list = null;
    if(passengerView == true){
      list = <ListGoup items={passengers} switch={this.handleSwitchTab}/>
    }
    else {
      list = <ListGoup items={requests} switch={this.handleSwitchTab}/>
    }
    return(

          <div className="col-md-3 nopadding">
            <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="btn-group btn-group-justified" role="group">
                    <a href="#" type="button" className="btn btn-raised btn-default">
                      REQUESTs
                    </a>
                    <a href="#" type="button" className="btn btn-raised btn-default">
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
